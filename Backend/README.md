# API Rest Starter

## **STACK:**
#### **NODEJS**
#### **TYPESCRIPT**
#### **PRISMA**
#### **MYSQL**

<br>

### **To start run**:
    pnpm run dev || npm run dev

### **Tree directory src**:
```bash
src
├── app
│   ├── app.ts
│   └── routes
├── config
│   ├── auth
│   │   └── auth-user.config.ts
│   ├── helmet.config.ts
│   └── prisma.config.ts
├── controllers
│   ├── error-handler
│   │   └── prisma
│   │       └── prisma-client-error.ts
│   └── error.controller.ts
├── events
├── server
│   └── www.ts
├── types
│   ├── code-status.type.ts
│   ├── express-namespace.d.ts
│   └── index.d.ts
└── utils
    ├── color.util.ts
    ├── cors.util.ts
    ├── email-validator.util.ts
    ├── generate-jwt.util.ts
    └── regexp.util.ts
```

### **.ENV**:

PORT_CONFIG=<port_server_number>

ORIGIN_1=<url_cors_origins>

BASE_URL=<base_url_path>

DATABASE_URL=<mysql://username:password@localhost:port/db-name>

SALT_ROUND=<number_salt_round_bcrypt>

ACCESS_TOKEN_SECRET_USERS=<access_token_secret_bcrypt>

ACCESS_TOKEN_AGE=<access_token_age_jwt>
REFRESH_TOKEN_AGE=<refresh_token_age_jwt>

SAFE_WORD_ADMIN=<safe_word_admin>
SAFE_WORD_SUPER_ADMIN=<safe_word_superadmin>

ADMIN_PWD=<admin_password>

NODE_ENV=<production|development|undefined>