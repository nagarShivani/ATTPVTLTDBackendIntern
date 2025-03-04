# ATTPVTLTDBackendIntern
# Employee & Patient Management API

This project is a **Node.js + Express API** that manages employee and patient records. It provides endpoints to retrieve employee details and filter patients based on their diseases.

## 📌 Features
- Retrieve a list of employees
- Store and retrieve patient details (ID, Name, Age, Disease, etc.)
- Filter patients based on their disease using:
  - Query String (`/patient?disease=Flu`)
  - URL Parameter (`/patient/disease/:disease`)

## 🛠 API Endpoints
- Employee API
    - GET	/employees	-> Retrieve all employees
- Patient API
    - GET	/patients ->	Retrieve all patients
    - GET		/patients?disease=Cold ->	Retrieve patients suffering from Cold (Query)
    - GET	/patients/disease/Flu ->	Retrieve patients suffering from Flu (Param)
---

## 🚀 Getting Started

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/nagarShivani/ATTPVTLTDBackendIntern.git
cd ATTPVTLTDBackendIntern

