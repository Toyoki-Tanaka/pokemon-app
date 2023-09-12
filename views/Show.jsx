const React = require('react')
class Show extends React.Component {
    render() {
        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
        };
        const pokemon = this.props.pokemon
        return (
            <div>
                <h1 style={myStyle}>Gotta Catch 'Em All!</h1>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.img + ".jpg"} />
                <a href="/pokemon">Go back to main</a>

            </div >
        )
    }
}


module.exports = Show;