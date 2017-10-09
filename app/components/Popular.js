import React from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';

function SelectedLanguage(props) {
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
        <ul className='languages'>
            {languages.map(function(lang) {
                return (
                    <li onClick={props.onSelect.bind(null, lang)}
                        style={lang === props.selectedLanguage ? {color: '#d0021b'}: null}
                        key={lang}>{lang}
                    </li>
                )
            }, this)}
        </ul>
    )
}

SelectedLanguage.PropTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};

class Popular extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedLanguage: 'All',
            repos: null
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount(){
        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage(lang) {
        this.setState(function () {
            return {
                selectedLanguage: lang,
                repos: null
            }
        });

        api.fetchPopularRepos(lang)
            .then(function (repos) {
                this.setState(function () {
                    return {
                        repos: repos
                    }
                })
            }.bind(this));
    }

    render() {
        return (
            <div>
                <SelectedLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                />
                {!this.state.repos
                    ? <p>Loading</p>
                    : <RepoGrid repos={this.state.repos} />}
            </div>
        )
    }
}

function RepoGrid(props){
    return (
        <ul className='popular-list'>
            {props.repos.map(function(repo, index){
                return <li key={repo.name} className='popular-item'>
                    <div className='popular-link'> #{index + 1} </div>
                    <ul className='space-list-items'>
                        <li>
                            <img src={repo.owner.avatar_url} className='avatar' alt="" />
                        </li>
                        <li><a href={repo.html_url}>{repo.name}</a></li>
                        <li>{repo.owner.login}</li>
                    </ul>
                </li>
            })
            }
        </ul>
    );
}

export default Popular;