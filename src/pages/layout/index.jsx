import React, { Component } from "react";
import className from "classnames";
import { Route, NavLink } from "react-router-dom";
// import Tag from "@containers/tag";
// import Article from "@containers/article";
// import Project from "@containers/project";
// import Demo from "@containers/demo";
import User from "@containers/user";
import Media from "@containers/media";
import Bestwish from "@containers/bestwish";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    document.title = "主页";
  }

  render() {
    const props = this.props;
    const { match } = props;
    return (
      <div className={className("layout")}>
        <header className={className("layout-header")}>
          <h2 className={className("layout-title")}>Bestwish</h2>
          <User logout={props.logout} />
        </header>
        <aside className={className("layout-sidebar")}>
          <ul className={className("layout-menus")}>
            <li className={className("layout-menu")}>
              <NavLink
                to={`${match.url}/medias`}
                className={className("layout-menuLink")}
                activeClassName={className("layout-menuLink--active")}
              >
                <span className={className("layout-menuName")}>媒体渠道</span>
              </NavLink>
            </li>
            <li className={className("layout-menu")}>
              <NavLink
                to={`${match.url}/bestwishs`}
                className={className("layout-menuLink")}
                activeClassName={className("layout-menuLink--active")}
              >
                <span className={className("layout-menuName")}>正在投放</span>
              </NavLink>
            </li>
          </ul>
        </aside>
        <div className={className("layout-main")}>
          <Route path={`${match.path}/medias`} component={Media} exact />
          <Route path={`${match.path}/bestwishs`} component={Bestwish} exact />
        </div>
      </div>
    );
  }
}

export default Index;

/* <li className={className("layout-menu")}>
              <NavLink
                to={`${match.url}/tags`}
                className={className("layout-menuLink")}
                activeClassName={className("layout-menuLink--active")}
              >
                <span className={className("layout-menuName")}>标签</span>
              </NavLink>
            </li>
            <li className={className("layout-menu")}>
              <NavLink
                to={`${match.url}/projects`}
                className={className("layout-menuLink")}
                activeClassName={className("layout-menuLink--active")}
              >
                <span className={className("layout-menuName")}>开源项目</span>
              </NavLink>
            </li>
            <li className={className("layout-menu")}>
              <NavLink
                to={`${match.url}/demos`}
                className={className("layout-menuLink")}
                activeClassName={className("layout-menuLink--active")}
              >
                <span className={className("layout-menuName")}>实验室</span>
              </NavLink>
            </li>
            <li className={className("layout-menu")}>
              <NavLink
                to={`${match.url}/articles/frontend`}
                className={className("layout-menuLink")}
                activeClassName={className("layout-menuLink--active")}
              >
                <span className={className("layout-menuName")}>前端知识</span>
              </NavLink>
            </li>
            <li className={className("layout-menu")}>
              <NavLink
                to={`${match.url}/articles/works`}
                className={className("layout-menuLink")}
                activeClassName={className("layout-menuLink--active")}
              >
                <span className={className("layout-menuName")}>项目总结</span>
              </NavLink>
            </li>
            <li className={className("layout-menu")}>
              <NavLink
                to={`${match.url}/articles/translates`}
                className={className("layout-menuLink")}
                activeClassName={className("layout-menuLink--active")}
              >
                <span className={className("layout-menuName")}>外文翻译</span>
              </NavLink>
            </li>
            <li className={className("layout-menu")}>
              <NavLink
                to={`${match.url}/articles/shares`}
                className={className("layout-menuLink")}
                activeClassName={className("layout-menuLink--active")}
              >
                <span className={className("layout-menuName")}>精彩转载</span>
              </NavLink>
            </li>
            <li className={className("layout-menu")}>
              <NavLink
                to={`${match.url}/articles/reading`}
                className={className("layout-menuLink")}
                activeClassName={className("layout-menuLink--active")}
              >
                <span className={className("layout-menuName")}>关于读书</span>
              </NavLink>
            </li> */

//     <Route path={`${match.path}/demos`} component={Demo} exact />
//   <Route
//     path={`${match.path}/articles/frontend`}
//     render={(props) => (
//       <Article {...props} classify="frontend" classifyName="前端知识" />
//     )}
//     exact
//   />
//   <Route
//     path={`${match.path}/articles/works`}
//     render={(props) => (
//       <Article {...props} classify="works" classifyName="项目总结" />
//     )}
//     exact
//   />
//   <Route
//     path={`${match.path}/articles/translates`}
//     render={(props) => (
//       <Article
//         {...props}
//         classify="translates"
//         classifyName="外文翻译"
//       />
//     )}
//     exact
//   />
//   <Route
//     path={`${match.path}/articles/shares`}
//     render={(props) => (
//       <Article {...props} classify="shares" classifyName="精彩转载" />
//     )}
//     exact
//   />
//   <Route
//     path={`${match.path}/articles/reading`}
//     render={(props) => (
//       <Article {...props} classify="books" classifyName="关于读书" />
//     )}
//     exact
//   />
