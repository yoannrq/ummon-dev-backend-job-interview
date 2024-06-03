# Technical test (dev backend)

## Objectives

Develop a graphql API that exposes data from a relational database

## Instructions

Clone this project and install the dependencies using npm

Download and decompress the .csv files from https://rebrickable.com/downloads/

Import the .csv files into an sqlite database. You can get help from this tutorial https://www.sqlitetutorial.net/sqlite-import-csv/

Implement and document the missing entities of typeorm schema
Implement and document the missing queries and resolvers of the graphql api 

Send a link to a public git repository with your code (don't publish the database file)


# Technical Test (Dev Backend)

## Objectives

Develop a GraphQL API that exposes data from a relational database.

## Instructions

### Prerequisites

- Node.js (v20.x or later recommended)
- npm (v10.x or later recommended)
- SQLite3

### Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install the dependencies**

   ```bash
   npm install
   ```

3. **Download and Decompress CSV Files**

   Download the necessary CSV files from [Rebrickable](https://rebrickable.com/downloads/). 

4. **Import CSV Files into SQLite Database**

   Follow the tutorial at [SQLite Tutorial](https://www.sqlitetutorial.net/sqlite-import-csv/) to import the downloaded CSV files into an SQLite database. 

   Example steps to import a CSV file:

   ```bash
   sqlite3 database.db
   .mode csv
   .import /path/to/your/file.csv your_table_name
   ```

   Repeat this process for all CSV files, creating corresponding tables for each.

### Implementation Steps

1. **Define TypeORM Entities**

   Implement and document the missing entities in the `src/entities` directory. Each entity should correspond to a table in your SQLite database. For example:

   ```typescript
   import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

   @Entity()
   export class ExampleEntity {
       @PrimaryGeneratedColumn()
       id: number;

       @Column()
       name: string;

       // Add other columns as per your CSV data
   }
   ```

2. **Implement GraphQL Schema**

   Update the GraphQL schema in `src/schema.graphql`. For example:

   ```graphql
   type ExampleType {
       id: ID!
       name: String!
       # Add other fields as per your entity
   }

   type Query {
       getExample(id: ID!): ExampleType
       getExamples: [ExampleType]
   }
   ```

3. **Create Resolvers**

   Implement and document the resolvers in the `src/resolvers` directory. Each resolver should handle the logic for fetching and manipulating data. 
   Also implement some queries in the `src/queries` directory. 
   ```

4. **Run the Project**

   To start the development server, run:

   ```bash
   npm run start:development serve
   ```

   The GraphQL playground will be available at `http://localhost:4000/graphql`.

### Submission

- Ensure all code is committed to your public Git repository.
- Do not include the SQLite database file in your repository. Add it to your `.gitignore` file.
- Send a link to your public Git repository for review.

## Notes

- Follow best practices for TypeScript, GraphQL, and TypeORM.
- Include documentation and comments in your code where necessary.
- Make sure your code is clean and well-structured.
- Ensure your GraphQL API is functional and can handle the required queries effectively.

Happy coding!