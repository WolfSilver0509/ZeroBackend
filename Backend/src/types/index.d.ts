// ================ INTERFACE ================ //

interface SystemError {
    address: string;
    code: string;
    dest: string;
    errno: number;
    info: object;
    message: string;
    path: string;
    port: number;
    syscall: string;
}

// ================ TYPE ================ //

type Cors = "production" | "development" | undefined;