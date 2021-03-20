// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

// EX + EXTRA-1-2-3-4-5-6-7-8
import * as React from 'react'
import {PokemonForm, fetchPokemon, PokemonInfoFallback, PokemonDataView} from '../pokemon'
import {ErrorBoundary} from 'react-error-boundary';

function PokemonInfo({pokemonName}) {
    const [state, setState] = React.useState({
      pokemon: [],
      status: 'idle',
      error: null
    })

    const {status, pokemon, error} = state

    React.useEffect(() => {
      if(!pokemonName){
        return;
      }

    setState({status: 'pending'}) 

    fetchPokemon(pokemonName)
    .then(pokemon => setState({status: 'resolved', pokemon}))
    .catch(error => setState({status: 'rejected', error}))

    }, [pokemonName])

    if (status === 'idle') {
    return 'Submit a pokemon'
  } else if (status === 'pending') {
    return <PokemonInfoFallback name={pokemonName} />
  } else if(status === 'rejected') {
    throw error
  }
  else if(status === 'resolved'){
    return <PokemonDataView pokemon={pokemon} />
  }
  else{
    throw new Error('oooppsss');
  }
}

function ErrorFallback({error}) {
  return (
    <div role="alert">
      There was an error:{' '}
      <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
    </div>
  )
}

function App() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
      <ErrorBoundary 
        onReset={() => setPokemonName('')} 
        resetKeys={[pokemonName]}
        FallbackComponent={ErrorFallback}
      >
        <PokemonInfo pokemonName={pokemonName} />
      </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
