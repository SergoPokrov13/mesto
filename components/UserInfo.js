class UserInfo {

    constructor({name, job}) {
        this._userNameElement = document.querySelector(name);
        this._userJobElement = document.querySelector(job);;
    }

    getUserInfo() {
        return {
            name: this._userNameElement.textContent,
            job: this._userJobElement.textContent,
        }
    }

    setUserInfo({name, job}) {
        this._userNameElement.textContent = name;
        this._userJobElement.textContent = job;
    }
} 

export default UserInfo;