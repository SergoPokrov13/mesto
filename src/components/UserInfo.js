class UserInfo {

    constructor({nameSelector, jobSelector, avatarSelector}) {
        this._userNameElement = document.querySelector(nameSelector);
        this._userJobElement = document.querySelector(jobSelector);
        this._userAvatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return {
            name: this._userNameElement.textContent,
            job: this._userJobElement.textContent,
        }
    }

    getUserId() {
        return this._id;
    }

    setUserInfo({name, about, avatar, _id}) {
        if(name){
            this._userNameElement.textContent = name;
        }

        if(about){
            this._userJobElement.textContent = about;
        }
        
        if(avatar){
            this._userAvatar.src = avatar;
        }

        this._id = _id;
    }
} 

export default UserInfo;