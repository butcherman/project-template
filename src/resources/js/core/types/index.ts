type SubmitMethod = "get" | "post" | "put" | "delete";

type ComponentSize = "sm" | "md" | "lg";

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

interface MenuItem {
    label: string;
    icon: string;
    route:
        | string
        | {
              url: string;
              method: SubmitMethod;
          };
}
