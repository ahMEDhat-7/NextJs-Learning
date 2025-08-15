export interface ErrorProps {
    error: Error;
    reset : () => void;   
}

export interface PageProps {
    params : {id : string}
}
