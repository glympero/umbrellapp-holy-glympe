# umbrellapp-holy-glympe

#26-11-2016 – ΛΥΜΠΕΡΟΠΟΥΛΟΣ ΓΕΩΡΓΙΟΣ

# Reference manual

### 1.	εγκατασταση
  * Download from: https://github.com/glympero/umbrellapp-holy-glympe
  * A.	Install npm modules
    * i.	Npm install για εγκατάσταση των module που βρίσκονται στο αρχειο package.json
    * ii.	Npm build dev για έναρξη του API (Προϋπόθεση να υπάρχει η mongodb βάση και να είναι ενεργοποιημένη (mongod)
### 2.	ΟΔΗΓΕΙΕΣ ΧΡΗΣΗΣ (με χρηση postman)
  * A.	Αναζήτηση πόλης  με όνομα ή συντεταγμένες
    * i.	http://localhost:3005/v1/weather/SearchBy/Kathmandu
    * ii.	http://localhost:3005/v1/weather/SearchBy/37.666668/55.683334
  * B.	Λίστα με όλες τις αγαπημένες πόλεις
    * i.	http://localhost:3005/v1/weather/ (GET Request)
  * C.	Εισαγωγή αγαπημένης πόλης
    * i.	http://localhost:3005/v1/weather/add (POST request με τις αναμενόμενες παραμέτρους
  * D.	Επεξέργασία αγαπημένης πόλης
    * i.	http://localhost:3005/v1/weather/:id (PUT Request)
  * E.	Διαγραφή αγαπημένης πόλης
    * i.	http://localhost:3005/v1/weather/:id (DELETE request)
