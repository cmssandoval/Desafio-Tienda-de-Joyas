# backend-app-joyas

This is the backend app for the **Desafío 5 - Tienda de joyas** and was made with Express JS and node-postgres.

I also used the following packages:
- **cors** to connect the frontend.
- **dotenv** to set and read environment variables.
- **pg-format** to parameterize the getAllJoyas query.
- **winston** to experiment creating a logger middleware (for invalid routes in this case), but I created a request reporter with fs module instead.

## How to use
Please go to [**General Project README**](../README.md) to read all the instructions. To summarize, the requirements to run the backend app in dev mode:

1. Make sure you have postgres installed, with the specified database, table and coorresponding data created.

2. Install dependency packages with a terminal in the backend root path running:

    ```bash
    $ npm install
    ```

3. Create a .env file and specify the postgres pool connection configuration and the server listening port (as said in frontend-README, default port is 3000 by the way).

4. Start the app with the following command:

    ```bash
    $ npm run dev
    ```

5. Visit **http://localhost:3000/joyas** to see all Joyas.

6. Visit **http://localhost:3000/joyas/filtros** and write filters via query params to see Joyas that match with the specified filters.

<h4 style="color: lime; font-style: italic;">> Thank you for reading this README.</h4>