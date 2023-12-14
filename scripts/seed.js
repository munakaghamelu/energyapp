const { db } = require('@vercel/postgres');
const {
  users,
  forms,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // create the users table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        role TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);
    // console.log(users);

    // insert data into the users table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, role, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${user.role}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
        `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedForms(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // create forms tale if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS forms (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID NOT NULL,
      positive INT NOT NULL,
      good INT NOT NULL,
      pleasant INT NOT NULL,
      happy INT NOT NULL,
      joyful INT NOT NULL,
      contented INT NOT NULL,
      negative INT NOT NULL,
      bad INT NOT NULL,
      unpleasant INT NOT NULL,
      sad INT NOT NULL,
      afraid INT NOT NULL,
      angry INT NOT NULL
  );
`;

    console.log(`Created "forms" table`);

    // insert data into the "forms" table
    const insertedForms = await Promise.all(
      forms.map(
        (form) => client.sql`
        INSERT INTO forms (user_id, positive, good, pleasant, happy, joyful, contented, negative, bad, unpleasant, sad, afraid, angry)
        VALUES (${form.user_id}, ${form.positive}, ${form.good}, ${form.pleasant}, ${form.happy}, ${form.joyful}, ${form.contented}, ${form.negative}, ${form.bad}, ${form.unpleasant}, ${form.sad}, ${form.afraid}, ${form.angry})
        ON CONFLICT (id) DO NOTHING;
        `,
      ),
    );

    console.log(`Seeded ${insertedForms.length} forms`);

    return {
      createTable,
      forms: insertedForms,
    };
  } catch (error) {
    console.error('Error seeding forms:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedUsers(client);
  await seedForms(client);
  
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});