import PropTypes from 'prop-types';
import s from "./Notification.module.css"

const Notification = props => {
	const {message}=props
	return <div  className={s.Notification}><p>{message}</p>
	</div>;
};
export default Notification;

Notification.protoTyres = {
	message:PropTypes.string.isRequired
}