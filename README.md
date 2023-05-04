# react-custom-hooks
Custom Hooks for React Projects

1. <b>useFetch()</b> - This hook uses the inbuilt fetch method to fetch data. It return the loading state, error state and the data.

   **isLoading** - state to define the loading status of the api <br />
   **isError** - state to define the error state of the api <br />
   **data** -  state to collect the data returned from successful api call
   
   ### How to use
   1. Copy paste the useFetch file in your project.
   2. Import useFetch in the required component just like how you import other react hooks
   3. Use the hook by passing it a url <br />
      <b>Example</b>
      <code>
       const [isLoading, isError, data] = useFetch(url);
       </code>
       
2. **useAxios()** - This hook is similar to the useFetch hook but it uses the axios package to fetch the data instead of the inbuilt fetch method.
    
    > Note: To use this hook, you must have the axios package installed.
      
   **isLoading** - state to define the loading status of the api <br />
   **isError** - state to define the error state of the api <br />
   **data** -  state to collect the data returned from successful api call
   
   ### How to use
   1. Copy paste the useAxios file in your project.
   2. Import useAxios in the required component just like how you import other react hooks
   3. Use the hook by passing it a url <br />
      <b>Example</b>
      <code>
       const [isLoading, isError, data] = useAxios(url);
       </code>
