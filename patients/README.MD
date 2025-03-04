 Test the API
 Use Postman 

Get all patients:
 http://localhost:3000/patients

Filter by disease (Query String):
 http://localhost:3000/patients/filter?disease=Cold

Filter by disease (URL Param):
 http://localhost:3000/patients/disease/Flu

Patients suffering from Cold:
 http://localhost:3000/patients/cold

Patients suffering from Flu:
 http://localhost:3000/patients/flu