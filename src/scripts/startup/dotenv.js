import dotenv from 'dotenv';

export default function(): void {
    dotenv.load();
    console.log("Loaded environment variables.")
}