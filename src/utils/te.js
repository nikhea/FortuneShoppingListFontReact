{this.state.error ? <h1>{categories.msg}</h1> : null}
{
    !isLoading ? (
        categories.categories.map(categorie => {

          {console.log(categorie)} 
       })





    ) : (<h3>Loading...</h3>)
}