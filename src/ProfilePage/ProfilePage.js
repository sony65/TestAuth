import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { useHistory } from "react-router";
import { LOGIN_PAGE_URL } from "../routes";

const mapStateToProps = (state) => {
    return {
        login: state.login,
    }
}

const ProfilePage = ({login}) => {
    const history = useHistory();

    useEffect(() => {
        if (!login) {
            history.push(LOGIN_PAGE_URL);
        }
    }, [history, login])

    return (
        <div>
            <h1>{login}</h1>
        </div>
    );
};

export default connect(mapStateToProps)(ProfilePage);