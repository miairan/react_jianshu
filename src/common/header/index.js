import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleFocusAction, handleBlurAction } from '../../store/actionCreators';

import { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from './style.js'

class Header extends Component {
    render () {
        return (
            <Fragment>
                <HeaderWrapper>
                    <Logo />
                    <Nav>
                        <NavItem className="left active"><i className="iconfont">&#xe607;</i>首页</NavItem>
                        <NavItem className="left"><i className="iconfont">&#xe607;</i>下载App</NavItem>
                        <SearchWrapper onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur}>
                            <CSSTransition in={this.props.focused} timeout={200} className="slide">
                                <NavSearch className={this.props.focused ? 'focused' : ''}/>
                            </CSSTransition>
                            <i className={this.props.focused ? 'iconfont focused' : 'iconfont'}>&#xe7e0;</i>
                        </SearchWrapper>
                        <NavItem className="right">登录</NavItem>
                        <NavItem className="right">
                            <i className="iconfont">&#xe607;</i>
                        </NavItem>
                    </Nav>

                    <Addition>
                        <Button className="reg">注册</Button>
                        <Button className="writing">
                            <i className="iconfont">&#xe608;</i>
                            写文章
                        </Button>
                    </Addition>
                </HeaderWrapper>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus () {
            dispatch(handleFocusAction);
        },
        handleInputBlur () {
            dispatch(handleBlurAction);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
