# JSON Schema Builder 

**Build dynamic JSON schemas visually with nested fields — from zero to hero!**


## 🔥 Project Overview

This ReactJS application enables users to **dynamically build JSON schemas** by adding, editing, deleting, and nesting fields recursively. Using **React Hook Form** for seamless form state management and **Ant Design** for elegant UI, this project provides an intuitive schema-building experience with real-time JSON preview.


## 🚀 Features

- **Dynamic Field Management**: Add, edit, and delete any number of fields easily.
- **Nested Fields Support**: Recursively add nested objects for the 'Nested' field type.
- **Type Selection**: Supports multiple data types including String, Number, Boolean, ObjectId, Float, and Nested.
- **Real-Time Preview**: Instantly see the generated JSON schema as you build.
- **Robust Form Handling**: Powered by React Hook Form and useFieldArray for dynamic form arrays.
- **User-friendly UI**: Built with Ant Design components for consistent styling and accessibility.


## 💡 How It Works

- The main `Builder` component manages the list of fields using React Hook Form's `useFieldArray`.
- Each field is rendered via the recursive `Fld` component, which allows nested children for fields of type 'Nested'.
- On submission, the form state is transformed into a valid JSON schema object by recursively traversing the fields.
- Live preview updates on every change to give instant feedback.


## 🛠 Tech Stack

- ReactJS (Functional Components & Hooks)
- React Hook Form (`useForm`, `useFieldArray`, `Controller`)
- Ant Design (UI Components)
- JavaScript (ES6+)


## ⚙️ Setup & Run Locally

1. Clone the repository  
   
   git clone https://github.com/ayushpandey2026/json-schema-builder.git
   cd json-schema-builder

2. npm install
   
3. npm run dev

