// import React from 'react';

// import Button from './button';
// //import { isFormValid } from '../../utils/form-validation';
// import '../../../core/components/wizard.css';

// import Footer from '../footer';

// class Steps extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             isValid: false
//         };
//     }

//     handleSubmit = (e) => {
//         const { onSubmit } = this.props;
//         e.preventDefault();
//         const isValid = e.target.checkValidity();
//         this.setState({
//             isValid: isValid
//         });
//         onSubmit(isValid);
//     };

//     render() {
//         const { children  } = this.props;
//         let content = null;
//         let footer = null;
//         children.forEach((child) => {
//             if(child.type === Content) {
//                 content = child;
//             }
//             else if(child.type === Footer) {
//                 footer = <Footer
//                     { ...child.props }
//                     onClick = {(e) => {
//                         console.log('CLICKED');
//                         console.log( content.isValid );
//                         console.log(e);
//                     }}
//                 />;
//             }
//         });

//         console.log('Form children', this.props);
//         return (
//             <form noValidate>
//                 { content }
//                 { footer }
//             </form>
//         );
//     }
// }

// // class Wizard extends  {

// // }

// class Content extends React.Component {

//     // isValid = () => {
//     //     return true;
//     // };

//     render() {
//         const { children } = this.props;
//         return (
//             <div>
//                 { children }
//             </div>
//         );
//     }
// }

// Content.isValid = () => true;

// Steps.Content = Content;
// // Wizard.Form = Form;
// Steps.Footer = Footer;

// export default Steps;
