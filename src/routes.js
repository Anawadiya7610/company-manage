import React from "react";
import { Routes, Route } from "react-router-dom";
import { HeaderContainerPage } from "./component/Header/header.container";
import { LoginContainerPage } from "./views/login/login.container";
import { SidebarContainerPage } from "./component/Sidebar/sidebar.container";
import { DashboardContainerPage } from "./views/dashboard/dashboard.container";
import { HomeContainerPage } from "./component/Homepage/home.container";
import { PieChartContainerPage } from "./component/piechart/piechart.container";
import { MixchartContainerPage } from "./component/mixchart/mixchart.container";
import { BarlineContainerPage } from "./component/barlinechart/bar.container";
import { RadarChartsContainerPage } from "./component/radarcharts/radar.container";
import { NewscontentContainerPage } from "./component/newscontent/news.container";
import { SocialContainerPage } from "./component/socialFolow/social.container";
import { TodoItemContainerPage } from "./component/Todo/todo.container";
import { TableContainerPage } from "./views/datatable/table.container";
import { ProjectContainerPage } from "./views/projectmanejar/project.container";
import { DepartmentContainerPage } from "./views/department/department.container";
import { RegistrationContainerPage } from "./views/resgistrationform/regis.container";
import { EmployContainerPage } from "./views/employs/employ.container";
import { ReportContainerPage } from "./views/reports/report.container";
import { StaffContainerPage } from "./views/staff/staff.container";
import { ReviewContainerPage } from "./views/review/review.container";
import { FlagContainerPage } from "./component/countryflag/flag.container";
import { ManageContainerPage } from "./views/manage/manage.container";

function RoutePath() {
  return (
    <Routes>
      <Route exact path="/" element={<LoginContainerPage />} />
      <Route exact path="/header" element={<HeaderContainerPage />} />
      <Route exact path="/sidebar" element={<SidebarContainerPage />} />
      <Route exact path="/dashboard" element={<DashboardContainerPage />} />
      <Route exact path="/home" element={<HomeContainerPage />} />
      <Route exact path="/piechart" element={<PieChartContainerPage />} />
      <Route exact path="/barchart" element={<BarlineContainerPage />} />
      <Route exact path="/radarchart" element={<RadarChartsContainerPage />} />
      <Route exact path="/mixchart" element={<MixchartContainerPage />} />
      <Route exact path="/news" element={<NewscontentContainerPage />} />
      <Route exact path="/social" element={<SocialContainerPage />} />
      <Route exact path="/todo" element={<TodoItemContainerPage />} />
      <Route exact path="/table" element={<TableContainerPage />} />
      <Route exact path="/Project" element={<ProjectContainerPage />} />
      <Route exact path="/department" element={<DepartmentContainerPage />} />
      <Route
        exact
        path="/registration"
        element={<RegistrationContainerPage />}
      />
      <Route exact path="/employ" element={<EmployContainerPage />} />
      <Route exact path="/report" element={<ReportContainerPage />} />
      <Route exact path="/staff" element={<StaffContainerPage />} />
      <Route exact path="/review" element={<ReviewContainerPage />} />
      <Route exact path="/flag" element={<FlagContainerPage />} />
      <Route exact path="/manage" element={<ManageContainerPage />} />
    </Routes>
  );
}

export default RoutePath;
