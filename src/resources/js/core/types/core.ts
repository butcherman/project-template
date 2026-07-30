interface FlashAlert {
    id?: string;
    message: string;
    level: VariantType;
}

type VariantType =
    | "danger"
    | "dark"
    | "error"
    | "help"
    | "info"
    | "light"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "none";

type ComponentSize = "sm" | "md" | "lg";

// interface InertiaFormData {
//     [key: string]: any;
// }

// interface InertiaFormErrors {
//     [key: string]: string;
// }

// interface linkList {
//     url: string;
//     text: string;
// }

interface MenuItem {
    label: string;
    icon: string;
    route: string;
}

// interface LinkHelper {
//     href: string;
//     external?: boolean;
// }

// interface IndexedData<TData> {
//     id: string;
//     data: TData;
// }
