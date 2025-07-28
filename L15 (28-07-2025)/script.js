const { neon } = require("@neondatabase/serverless");

const sql = neon(
    `postgresql://neondb_owner:npg_XJEoRDjm1BF2@ep-shy-bonus-a1eqzyq3-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`
);

async function main() {
    const result = await sql.query(`
            CREATE TABLE G4_STUDENTS (
            id SERIAL PRIMARY KEY, 
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE
          );
    `);

    console.log("Table created successfully");
}

async function insertUser(name, email) {
    const insertQuery = `
      INSERT INTO g4_students (name, email)
      VALUES ($1, $2)
      RETURNING *;
    `;

    const res = await sql.query(insertQuery, [name, email]);
    console.log("Inserted user successfully:", res[0]);
}

main();
insertUser("ABC", "abc@example.com");
