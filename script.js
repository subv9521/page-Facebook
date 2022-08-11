getLoadingPage = document.querySelector('.loading-page');
setTimeout(() => {
  getLoadingPage.classList.add('d-none')
} , 2000)

let getElementNav = document.querySelectorAll('.navbar-activate-icon');
let getPost = document.querySelector('.post');
let infoOrther = document.querySelector('.info-orther');

getElementNav.forEach((item, index) => {
    item.addEventListener('click', () => {
      getElementNav.forEach((item2) => {
        item2.classList.remove('active');
      });

      if (index != 0) {
        getPost.classList.add('d-none');
        infoOrther.classList.add('d-block');
      } else {
        getPost.classList.remove('d-none');
        infoOrther.classList.remove('d-block');
      }

      item.classList.add('active');
    });
});


var imgHeaderDes = document.querySelectorAll('.img .head__des-item');
imgHeaderDes.forEach((item) => {
    item.addEventListener('click', () => {
        imgHeaderDes.forEach((item2) => {
            item2.classList.remove('active');
        });
        item.classList.add('active');
    });
});

var videoHeaderDes = document.querySelectorAll('.video .head__des-item');
videoHeaderDes.forEach((item) => {
    item.addEventListener('click', () => {
        videoHeaderDes.forEach((item2) => {
            item2.classList.remove('active');
        });
        item.classList.add('active');
    });
});

var sportHeaderDes = document.querySelectorAll('.sport .head__des-item');
sportHeaderDes.forEach((item) => {
    item.addEventListener('click', () => {
        sportHeaderDes.forEach((item2) => {
            item2.classList.remove('active');
        });
        item.classList.add('active');
    });
});

var musicHeaderDes = document.querySelectorAll('.music .head__des-item');
musicHeaderDes.forEach((item) => {
    item.addEventListener('click', () => {
        musicHeaderDes.forEach((item2) => {
            item2.classList.remove('active');
        });
        item.classList.add('active');
    });
});


let getElementIntroduce = document.querySelectorAll('.introduce__list-item');

getElementIntroduce.forEach((item) => {
    item.addEventListener('click', () => {
        getElementIntroduce.forEach((item2) => {
            item2.classList.remove('active-item');
        });
        item.classList.add('active-item');
    });
});

let getPostManageItem = document.querySelectorAll('.post-manage-item');

getPostManageItem.forEach((item) => {
    item.addEventListener('click', () => {
        getPostManageItem.forEach((item2) => {
            item2.classList.remove('active');
        });
        item.classList.add('active');
    });
});




/*

const baseURL = 'https://62ebc1e5705264f263dfa66f.mockapi.io/v1';

const _axios = {
  get(url, opts = {}) {
    return fetch(url, {
      method: "GET",
      ...opts,
    })
  },
  post(url, payload, opts = {}) {
    return fetch(url, {
      method: "POST",
      body: payload,
      ...opts,
    })
  }
}
var n = prompt('nhập vào số thứ tự người dùng:');
// let n = 3;



function getUserInfo() {
  return new Promise((resolve,reject) => {

    let userUrl = baseURL + '/user'

    _axios.get(userUrl)
    .then(response => { 
      return response.json()
    })
    .then(data => {
      resolve(data[n])
    })
    .catch(err => {
      reject(err)
    })
  })
}

function getPosts() {
  return new Promise((resolve,reject) => {

    let userUrl = baseURL + '/posts'

    _axios.get(userUrl)
    .then(response => { 
      return response.json()
    })
    .then(data => {
      resolve(data[n])
    })
    .catch(err => {
      reject(err)
    })
  })
}

function getImages() {
  return new Promise((resolve,reject) => {

    let userUrl = baseURL + '/images'

    _axios.get(userUrl)
    .then(response => { 
      return response.json()
    })
    .then(data => {
      resolve(data)
    })
    .catch(err => {
      reject(err)
    })
  })
}

function getFriend() {
  return new Promise((resolve,reject) => {

    let userUrl = baseURL + '/friends'

    _axios.get(userUrl)
    .then(response => { 
      return response.json()
    })
    .then(data => {
      // resolve(data[n])
      resolve(data)
    })
    .catch(err => {
      reject(err)
    })
  })
}

window.addEventListener('DOMContentLoaded', function() {
  console.log('running when page loaded');

  getUserInfo()
    .then(data => {
      const avatar = document.getElementById("avatar")
      const background = document.getElementById("background")
      const username = document.getElementById("username")
      username.innerHTML = data.name
      background.src = data.background
      avatar.src = data.avatar

      const headerAvatar = document.querySelectorAll('.header__avatar');
      headerAvatar.forEach((thumnalAvatar) => {
        return  thumnalAvatar.src = data.avatar;
      })

      const postsName = document.querySelectorAll('.posts-desc-name');
      postsName.forEach((item) => {
        return  item.innerHTML = data.name;
      })

      
    })
    .catch(e => {
      alert(e.message)
    })

  getPosts()
    .then(data => {
      const postsDate = document.querySelectorAll(".posts-desc-date")
      postsDate.forEach((item) => {
        return  item.innerHTML = data.createdAt;
      })

      const content = document.querySelectorAll(".post-text")
      content.forEach((item) => {
        return  item.innerHTML = data.content;
      })

      const postImg = document.querySelectorAll(".post-img-link")
      postImg.forEach((item) => {
        return  item.src = data.avatar;
      })

      const commentFriend = document.querySelectorAll(".comment-friend")
      commentFriend.forEach((item) => {
        return  item.innerHTML = data.countComment + ' ' + 'bình luận';
      })

    })
    .catch(e => {
      alert(e.message)
    })

  getImages()
    .then(data => {
      const imgFriend = document.querySelectorAll(".img__link")
      imgFriend.forEach((item) => {
        const random = Math.floor(Math.random() * data.length);
        return  item.src = data[random].imageUrl;
        // return  item.src = data.imageUrl;
      })
    })
    .catch(e => {
      alert(e.message)
    })

  getFriend()
    .then(data => {

      const imgFriend = document.querySelectorAll(".friend-img-link")
      imgFriend.forEach((item) => {
        const random = Math.floor(Math.random() * data.length);
        return  item.src = data[random].avatar;
        // return  item.src = data.avatar;
      })

      const nameFriend = document.querySelectorAll(".friend-name")
      nameFriend.forEach((item) => {
        const random2 = Math.floor(Math.random() * data.length);
        return  item.innerHTML = data[random2].name;
        // return  item.innerHTML = data.name;
      })

    })
    .catch(e => {
      alert(e.message)
    })


  
})