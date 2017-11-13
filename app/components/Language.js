import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Loading from './Loading';

import api from '../utils/api';

export default class Language extends React.Component {

    constructor({ match }){
        super();
        this.state = {
            selected: match.params.id
        };

        this.updateRepositoryView = this.updateRepositoryView.bind(this);
    }

    componentDidMount(){
        this.updateRepositoryView(this.state.selected);
    }

    updateRepositoryView(param){
        this.setState(function () {
            return {
                selectedLanguage: param,
                repository: null
            }
        });

        api.fetchPopularRepos(param)
            .then(function(repos){
                this.setState(function(){
                    return {
                        repository : repos
                    }
                });
        }.bind(this))
    }

    render () {
        return (
            <Grid>
                {!this.state.repository ? <Loading /> : <RepositoryItems repository={this.state.repository} />}
            </Grid>
        )
    }
}

function RepositoryItems(props){
    return (
        <Row>
            {props.repository.map(function(itm, idx){
                return (
                    <Col xs={4} md={2} key={idx}>
                        <Thumbnail src={itm.owner.avatar_url} alt="171x180">
                            <h5>{itm.name}</h5>
                            <p>{itm.language}</p>
                        </Thumbnail>
                    </Col>
                )
        })}
        </Row>
    )
}