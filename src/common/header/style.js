import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    box-sizing: border-box;
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;
export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        border-radius: 30px;
        text-align: center;
        line-height: 30px;
        vertical-align: middle;
        &.focused {
            color: #fff;
            background: #777;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin-top: 9px;
    box-sizing: border-box;
    border: none;
    border-radius: 19px;
    font-size: 14px;
    color: #777;
    background: #eee;
    outline: none;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        transition: all 0.2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all 0.2s ease-in;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    box-sizing: border-box;
    height: 40px;
    line-height: 26px;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    padding: 6px 18px;
    margin: 8px 15px 0 0;
    border-radius: 20px;
    font-size: 15px;
    cursor: pointer;
    &.reg {
        color: #ec6149;
        border: 1px solid #ec6149;
    }
    &.writing {
        color: #fff;
        background: #ec6149;
    }
`;
