import ContributorDetail from "../../data/contributor-detail";
import ContributorList from "../../data/contributor-list";
import dataBudaya from "../../data/data-budaya";
import ModalManager from "../../scripts/modal-manager";
import dashboardPostCreator from "../../templates/creator/dashboard-post-creator";
import CheckLogin from "../../utils/check-login";

const dashboardAfter = async () => {
    const check = CheckLogin();
    if(!check){
        alert("You are not allowed to be here, please login first");
        window.location.href = "#/login";
    }
    const data = await ContributorDetail(check);
    const userid = data.data.id;
    let elements;
    if(userid){
        const allPost = await dataBudaya();
        const filterByAuthor = allPost.data.filter(item => item.authorId===userid);
        if(filterByAuthor){
            const showpost = filterByAuthor.map((item) => dashboardPostCreator(item));
            elements = showpost;
        }
        else{
            elements = "<h3>You dont have posted article!</h3>";
        }
    }
    document.getElementById("dashboard-posts").innerHTML = elements;

    const test = await ContributorList();
    console.log(test);
};

export default dashboardAfter;