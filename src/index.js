import Column from './components/Column';
import Container from './components/Container';
import Layout from './components/Layout';
import LayoutAside from './components/LayoutAside';
import LayoutContent from './components/LayoutContent';
import LayoutFooter from './components/LayoutFooter';
import LayoutHeader from './components/LayoutHeader';
import Row from './components/Row';

import Checkbox from './components/Checkbox';
import CheckboxButton from './components/CheckboxButton';
import CheckboxGroup from './components/CheckboxGroup';
import InputGroup from './components/InputGroup';
import Input from './components/Input';
import Radio from './components/Radio';
import RadioButton from './components/RadioButton';
import RadioGroup from './components/RadioGroup';

const components = {
    Column,
    Container,
    Layout,
    LayoutAside,
    LayoutContent,
    LayoutFooter,
    LayoutHeader,
    Row,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    InputGroup,
    Input,
    Radio,
    RadioButton,
    RadioGroup
};

class Inkline {
    constructor () {
        if (typeof window !== 'undefined' && window.Vue) {
            this.install(window.Vue);
        }
    }

    install (Vue, opts = {}) {
        components.map(component => {
            Vue.component(component.name, component);
        });
    };
}

export {
    Column,
    Container,
    Layout,
    LayoutAside,
    LayoutContent,
    LayoutFooter,
    LayoutHeader,
    Row,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Input,
    InputGroup,
    Radio,
    RadioButton,
    RadioGroup,
    Inkline
};

export default Inkline;
