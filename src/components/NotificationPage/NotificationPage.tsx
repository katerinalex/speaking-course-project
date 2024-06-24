import '../../styles/_typography.scss';
import './NotificationPage.scss';
import '../../styles/button.scss'

export const NotificationPage = () => {
    return (
        <div className='notification'>
            <h1 className="title">Notification</h1>

            <div className='body-text notification__text'>
                <ul className='body-text notification__text'>
                    <ol>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</ol>
                    <ol>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</ol>
                </ul>
            </div>

            <div className="mark-all">
                <h4 className='title title--H4 mark-all__title'>Stay in the loop, get notifications!</h4>
                <button className="mark-all__button button button--pink">Mark all as read</button>
            </div>
        </div>

    );
};