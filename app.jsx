{
  "name": "Booking",
  "type": "object",
  "properties": {
    "vehicle_id": {
      "type": "string",
      "description": "ID kendaraan yang dipesan"
    },
    "vehicle_name": {
      "type": "string",
      "description": "Nama kendaraan"
    },
    "customer_name": {
      "type": "string",
      "description": "Nama pelanggan"
    },
    "customer_email": {
      "type": "string",
      "description": "Email pelanggan"
    },
    "customer_phone": {
      "type": "string",
      "description": "Nomor telepon pelanggan"
    },
    "message": {
      "type": "string",
      "description": "Pesan tambahan"
    },
    "status": {
      "type": "string",
      "enum": [
        "pending",
        "contacted",
        "confirmed",
        "cancelled"
      ],
      "default": "pending"
    }
  },
  "required": [
    "vehicle_id",
    "customer_name",
    "customer_email"
  ]
}