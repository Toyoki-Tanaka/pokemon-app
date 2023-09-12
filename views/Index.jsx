const React = require('react')
class Index extends React.Component {
    render() {
        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
        };
        const { pokemon } = this.props
        return (
            <div>
                <h1 style={myStyle}>See All The Pokemon!</h1>
                <nav>
                    <a href="/pokemon/new">Create a New Pokemon</a>
                </nav>
                <ul>
                    {
                        pokemon.map((pkmn, i) => {
                            return (
                                <li key={i}>
                                    <a href={`/pokemon/${pkmn._id}`}>{pkmn.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div >
        )
    }
}


module.exports = Index;