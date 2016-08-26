import HomeContainer from './index';
import {connect} from 'react-redux';

const getStateToBindToContainerProps = (state, ownProps) => ({
    children: ownProps.children,
    params: ownProps.params,
    routes: ownProps.routes
});

const mapBoundActionCreatorsToActionsProp = (stateProps, dispatchProps) => ({
    ...stateProps,
    actions: {
        ...dispatchProps
    }
});

export default connect(getStateToBindToContainerProps, mapBoundActionCreatorsToActionsProp)(HomeContainer);

