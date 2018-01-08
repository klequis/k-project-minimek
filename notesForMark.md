# Part 5: Adding a Redux-ORM Schema and Model

**using: "redux-orm": "^0.9.4",**

Error: Schema has been renamed to ORM. Please import ORM instead of Schema from Redux-ORM.
new DeprecatedSchema
node_modules/redux-orm/lib/ORM.js:312
./src/app/schema/schema.js
src/app/schema/schema.js:3
  1 | import {Schema} from "redux-orm";
  2 |
> 3 | const schema = new Schema();
  4 |
  5 | export default schema;
  6 |
