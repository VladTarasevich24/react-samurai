import React from 'react'
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionSize = 10;
    let portionNumber = Math.ceil(props.currentPage / portionSize);
    let leftPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPageNumber = portionNumber * portionSize;
    return <div>

        {props.users.map(u => (
            <div className={s.userItem} key={u.id}>
                <div className={s.userAvatar}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar"/>
                    </NavLink>
                </div>
                <div className={s.userInfo}>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
                <div className={s.userLocation}>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "8b23b97b-0e27-48dc-b457-d1766865c10d",
                                }
                            })

                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }

                                })

                        }}>Unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "8b23b97b-0e27-48dc-b457-d1766865c10d",
                                }
                            })

                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }

                                })


                        }}>Follow</button>}

                </div>
            </div>
        ))}
        <div className={s.pagination}>
            {portionNumber > 1 &&
                <span onClick={() => props.onPageChanged(leftPageNumber - portionSize)}>Prev</span>}
            {pages
                .filter(p => p >= leftPageNumber && p <= rightPageNumber)
                .map(p => (
                    <span
                        key={p}
                        className={props.currentPage === p && s.selectedPage}
                        onClick={() => {
                            props.onPageChanged(p);
                        }}
                    >
                            {p}
                        </span>
                ))}
            {portionNumber < Math.ceil(pagesCount / portionSize) &&
                <span onClick={() => props.onPageChanged(rightPageNumber + 1)}>Next</span>}
        </div>
    </div>
}
export default Users;