# Zoho API Response Format

## Format General

Zoho CRM API v3 returnează răspunsuri în format **JSON** (nu XML).

## Structura Răspunsului pentru GET /crm/v3/Leads

### Răspuns Succes

```json
{
  "data": [
    {
      "Owner": {
        "name": "John Doe",
        "id": "123456789"
      },
      "Email": "lead@example.com",
      "Description": "Lead description",
      "$currency_symbol": "$",
      "Rating": null,
      "$review_process": null,
      "$followers": null,
      "$state": "create",
      "$process_flow": false,
      "No_of_Employees": 50,
      "Industry": "Technology",
      "$approved": true,
      "$approval": {
        "delegate": false,
        "approve": false,
        "reject": false,
        "resubmit": false
      },
      "Modified_Time": "2025-12-10T10:00:00+05:30",
      "$editable": true,
      "Status": "New",
      "Call_Attempts": null,
      "First_No_Answer_At": null,
      "Lead_Status": "Not Contacted",
      "First_Name": "John",
      "Last_Name": "Smith",
      "Full_Name": "John Smith",
      "Phone": "+1234567890",
      "Mobile": "+1234567890",
      "Fax": null,
      "Website": "https://example.com",
      "Lead_Source": "Website",
      "Company": "Example Corp",
      "Designation": "CEO",
      "City": "New York",
      "State": "NY",
      "Zip_Code": "10001",
      "Country": "USA",
      "Street": "123 Main St",
      "id": "987654321",
      "Created_Time": "2025-12-01T10:00:00+05:30",
      "$orchestration": false,
      "$se_module": "Leads"
    }
  ],
  "info": {
    "per_page": 200,
    "count": 1,
    "page": 1,
    "more_records": false
  }
}
```

## Structura Răspunsului pentru GET /crm/v3/Contacts

### Răspuns Succes

```json
{
  "data": [
    {
      "Owner": {
        "name": "Jane Doe",
        "id": "123456789"
      },
      "Email": "contact@example.com",
      "Description": "Contact description",
      "$currency_symbol": "$",
      "$review_process": null,
      "$followers": null,
      "$state": "create",
      "$process_flow": false,
      "$approved": true,
      "$approval": {
        "delegate": false,
        "approve": false,
        "reject": false,
        "resubmit": false
      },
      "Modified_Time": "2025-12-10T10:00:00+05:30",
      "$editable": true,
      "Status": "No Answer",
      "Call_Attempts": 2,
      "First_No_Answer_At": "2025-12-08T10:00:00+05:30",
      "First_Name": "Jane",
      "Last_Name": "Doe",
      "Full_Name": "Jane Doe",
      "Phone": "+1234567890",
      "Mobile": "+1234567890",
      "Fax": null,
      "Mailing_Street": "456 Oak Ave",
      "Mailing_City": "Los Angeles",
      "Mailing_State": "CA",
      "Mailing_Zip": "90001",
      "Mailing_Country": "USA",
      "Other_Street": null,
      "Other_City": null,
      "Other_State": null,
      "Other_Zip": null,
      "Other_Country": null,
      "id": "987654322",
      "Created_Time": "2025-12-01T10:00:00+05:30",
      "$orchestration": false,
      "$se_module": "Contacts"
    }
  ],
  "info": {
    "per_page": 200,
    "count": 1,
    "page": 1,
    "more_records": false
  }
}
```

## Câmpuri Importante pentru Microserviciu

### Câmpuri Folosite

Pentru **Leads** și **Contacts**, microserviciul folosește:

- `id` - ID-ul înregistrării (folosit ca `zoho_id`)
- `Status` - Statusul înregistrării (New, No Answer, Dead, etc.)
- `Call_Attempts` - Numărul de apeluri (poate fi `null`)
- `First_No_Answer_At` - Data primului no answer (poate fi `null`)
- `Phone` sau `Mobile` - Numărul de telefon pentru apelare

### Exemplu Record cu Status = New

```json
{
  "id": "987654321",
  "Status": "New",
  "Call_Attempts": null,
  "First_No_Answer_At": null,
  "Phone": "+1234567890",
  "Full_Name": "John Smith",
  "Email": "john@example.com"
}
```

### Exemplu Record cu Status = No Answer

```json
{
  "id": "987654322",
  "Status": "No Answer",
  "Call_Attempts": 2,
  "First_No_Answer_At": "2025-12-08T10:00:00+05:30",
  "Phone": "+1234567890",
  "Full_Name": "Jane Doe",
  "Email": "jane@example.com"
}
```

## Răspuns Eroare

### Eroare Autentificare

```json
{
  "code": "INVALID_TOKEN",
  "details": {},
  "message": "invalid oauth token",
  "status": "error"
}
```

### Eroare Validare

```json
{
  "code": "INVALID_DATA",
  "details": {
    "api_name": "Status",
    "expected_data_type": "picklist"
  },
  "message": "invalid data",
  "status": "error"
}
```

## Structura Răspunsului pentru PUT /crm/v3/Leads (Update)

### Request Body

```json
{
  "data": [
    {
      "id": "987654321",
      "Status": "No Answer",
      "Call_Attempts": 1,
      "First_No_Answer_At": "2025-12-10T10:00:00+05:30"
    }
  ]
}
```

### Răspuns Succes

```json
{
  "data": [
    {
      "status": "success",
      "details": {
        "id": "987654321",
        "Modified_Time": "2025-12-10T10:05:00+05:30"
      }
    }
  ]
}
```

## Notă Importantă

- Zoho API returnează **JSON**, nu XML
- Toate timestamp-urile sunt în format ISO 8601 cu timezone
- Câmpurile pot fi `null` dacă nu sunt setate
- `Call_Attempts` poate fi `null` sau un număr
- `First_No_Answer_At` poate fi `null` sau un datetime string

## Testare

Pentru a testa request-ul Zoho și a vedea răspunsul real:

```bash
# După ce ai un access token valid
curl -X GET "https://www.zohoapis.com/crm/v3/Leads" \
  -H "Authorization: Zoho-oauthtoken YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" | python3 -m json.tool
```



