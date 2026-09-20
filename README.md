# Desafío Tienda de joyas
This is my response to the **Desafio 5 - Tienda de joyas**. It was developed to demonstrate the correct implementation of the following requirements:

- HATEOAS API REST structure.
- Data length limiting, data pagination, and data ordering via http request query string.
- Data filtering via http request query string.
- Reports generation implemented via middlewares.
- Error handling using try/catch sentences and throw statement.
- Use of parameterized queries to avoid SQL Injections Attacks.

## How to use (Dev Mode)
1. Before anything, to use this app you should have:
    - Postgres installed.
    - Database joyas created.
    - Table inventario created and filled with data.
    
2. Clone, or download the repository.

3. Create a .env file in the backend and the frontend directories following the examples in each directory, in this file, you can change the PORT and postgres credentials and configuratuon if its needed.

4. In two different terminals, open both backend and frontend directories as root paths.

5. Run the following command:

    ```bash
    $ npm install
    ```
    
6. After, start the app with the following command:

    ```bash
    $ npm run dev
    ```

7. Visit **http://localhost:5173** to see the main page. This page allow you to:
    - See all Joyas.
    - Order Joyas by id ASC and DESC.
    - Search Joyas by name.

8. Visit **http://localhost:3000/joyas** to see a JSON containing all the Joyas fetched from the database following the HATEOAS pattern.

9. The pagination options, available via query parameters, are **limits**, **order_by**, and **page**. Here are some examples:
    - **http://localhost:3000/joyas?limits=3**
    - **http://localhost:3000/joyas?order_by=nombre_desc**
    - **http://localhost:3000/joyas?order_by=precio_asc**
    - **http://localhost:3000/joyas?limits=2&page=2**

10. Visit **http://localhost:3000/joyas/filtros** to see a JSON containing all the Joyas fetched from the database.

11. The filter options, available via query parameters, are **precio_max**, **precio_min**, **categoria**, **metal**, and **nombre**. Here are some examples:
    - **http://localhost:3000/joyas/filtros?precio_min=25000&precio_max=30000**
    - **http://localhost:3000/joyas/filtros?categoria=aros**
    - **http://localhost:3000/joyas/filtros?metal=oro**
    - **http://localhost:3000/joyas/filtros?nombre=anillo**

<h4 style="color: lime; font-style: italic;">> Thank you for reading this README.</h4>