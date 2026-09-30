import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/ONG_ProjetoFront-end/",

    build: {
        rollupOptions: {
            input: {
                index: resolve(import.meta.dirname, "index.html"),
                projetos: resolve(import.meta.dirname, "html/projetos.html"),
                cadastro: resolve(import.meta.dirname, "html/cadastro.html")
            }
        }
    }
});