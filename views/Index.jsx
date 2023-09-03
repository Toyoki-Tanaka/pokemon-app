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
                <ul>
                    {
                        pokemon.map((pkmn, i) => {
                            return (
                                <li>
                                    <a href={`/pokemon/${i}`}>{pkmn.name[0].toUpperCase() + pkmn.name.slice(1)}</a>
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