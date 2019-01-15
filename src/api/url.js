export default {
  /** 走班排课 */
  // 排课查询
  qryArrangeList: `/zxx/arrange/qryArrangeBaseInfoList`, // 排课查询列表
  delArrange: `/zxx/arrange/delArrangeById`, // 排课删除
  qryArrangeDetail: `/zxx/arrange/qryArrangeDetail`, // 排课查询详情

  // 教学计划
  saveArrange: `zxx/arrange/saveArrangeBaseInfo`, // 保存排课基础信息
  qrylayerList: `/zxx/layer/qryCourseLayerInfoList`, // 学科分层查询列表
  // qrylayerCourseName: `/zxx/layer/qryCourseNameListForArrange`, // 学科分层课程名称下拉列表查询接口
  qrylayerCourseName: `/zxx/layer/qryCourseNameListForGrade`, // 学科分层课程名称下拉列表查询接口
  savelayerInfo: `/zxx/layer/saveCourseLayerInfo`, // 学科分层详情保存接口
  dellayerInfo: `/zxx/layer/delCourseLayerById`, // 学科分层详情删除接口
  exportStuChoiceCourseExcel: `/zxx/layer/getStuChoiceCourseExcel`, // 学科分层 导出功能
  qryArrangeCourseLayerRela: `zxx/stuCourseLayer/qryArrangeCourseLayerRela`, // 导入学生选课 课程下拉列表数据
  qryStuChoiceInfoList: `zxx/stuCourseLayer/qryStuChoiceInfoList`, // 导入学生选课 列表数据
  delStuChoiceInfoList: `zxx/stuCourseLayer/delChoiceInfoById`, // 导入学生选课 列表数据删除
  qryArrangeClasses: `zxx/stuCourseLayer/qryArrangeClasses`, // 导入学生选课 行政班
  saveChooseCourseInfo: `zxx/stuCourseLayer/saveChoiceInfo`, // 导入学生选课 新增选课的保存
  updatechooseCourseInfo: `zxx/stuCourseLayer/updateChoiceInfo`, // 导入学生选课 修改选课的保存
  getChooseCourseInfo: `zxx/stuCourseLayer/qryStuCourseDetail`, // 导入学生选课 修改按钮，获取详细信息
  getSplitClassManage: `zxx/teach/qryTransLayer2ClassList`, // 教学分班管理-列表查询
  splitClasses: `/zxx/transLayer2Class`, // 教学分班管理 试分班
  saveTeachTask: `zxx/teach/saveTeachingTask`, // 教学分班管理 保存教学任务
  qryZbClassroomList: `zxx/teachingRoom/qryArrangeClassRoomList`, // 走班教室 列表查询接口
  saveArrangeClassRoom: `zxx/teachingRoom/saveArrangeClassRoom`, // 走班教室 新增保存
  delClassRoomById: `zxx/teachingRoom/delClassRoomById`, // 走班教室 删除
  qryZbClassroom: `zxx/teachingRoom/qryClassRoomDetail`, // 走班排课详情查询接口

  // 排课规则
  qryArrangeGroupInfo: `/zxx/coursePlan/qryArrangeGroupInfo`, // 课时预排 预排课信息查询
  saveGroupArrInfo: `/zxx/coursePlan/saveTeaGroupArrInfo`, // 课时预排 预排课信息保存
  saveCoursePlanInfo: `/zxx/coursePlan/saveCoursePlanInfo`, // 课时预排  新增课时组
  qrySourceAssessment: `/zxx/computeResoure`, // 资源评估 运算走班排课资源按钮
  qryTeachGroupsTree: `/base/qryTeachGroupsTree`, // 教学分组

  /**  普通排课 */
  // 教学计划
  qryTeachTask: `/base/qryTeachingTask`, // 教学任务详情
  qryClassList: `/base/qryClassList`, // 班级列表
  qryTeacherList: `/base/qryTeacherList`, // 班级列表

  // 排课规则 -》固排禁排
  qryGradeClassTree: `/base/qryGradeClassTree`, // 年级/班级禁排固排 treeData
  getTeacherTree: `/base/getTeacherTree`, // 教师禁排固排 treeData
  getTeacherTeachTask: `/base/getTeacherTeachTask`, // 教师禁排固排 教学任务
  getTeacherTimetable: `/base/getTeacherTimetable`, // 教师禁排固排 教学任课表
  getTeachGroupTree: `/base/getTeachGroupTree`, // 教研组禁排

  // 排课规则 -》合班设置
  getClasses: `/base/getClasses`, // 根据年级获取班级信息
  getCourse: `/base/getCourse`, // 获取课程信息

  /** 选课平台  */

  // 选课列表（选课任务）
  qryChoseCourseList: `/zxx/chose/qryChoseCourseList`, // 获取选课列表
  delChooseCourse: `/zxx/chose/dSjsChoseCourseDef`, // 获取选课列表 删除
  pubChoseTask: `/zxx/chose/pubChoseTask`, // 获取选课列表 发布

  // 选课设置 -》 基础信息
  qrySjsChoseTaskByChoseId: `/zxx/chose/qrySjsChoseTaskByChoseId`, // 查寻
  saveSjsChoseCourseDef: `/zxx/chose/doSjsChoseCourseDef`, // 保存

  // 选课设置 -》 可选学科tab
  qrySGKCourseList: `/zxx/chose/qrySGKCourseList`, // 选课模式查询
  saveSGKCourseList: `/zxx/chose/saveSGKCourseList`, // 选课模式查询保存
  qryGradeCourseList: '/zxx/chose/qryGradeCourseList', // 学科查询课程名称列表

  // 选课设置 -》参选学生tab
  qryClassesOptions: `/zxx/chose/qryDistinctClassList`, // 班级下拉列表
  qryJoinedStudents: `/zxx/chose/qryStuAttendList`, // 参与学生信息
  // 选课结果
  qrySingleSubjectAnalysis: `/zxx/chose/qryStuChoseResultInfo`, //  单科分析
  qryAssembleSubjectAnalysis: `/base/qryAssembleSubjectAnalysis`, // 选课组合分析

  // 学生选课
  qryStuChooseCourseList: `/zxx/chose/qryStuChooseCourseList`, // 列表查询

  /* 课程计划 */
  uploadCoursePlain: `/zxx/uploadSeg`, // 上传模板

  /* 系统配置 */
  qryKeyList: `/base/qryKeyList`, // 数据字典表格数据
  qryCalendar: `/zxx/calendar/qryCalendarInfoDetail`, // 校历维护 详情
  saveCalendar: `/zxx/calendar/saveCalendarInfo`, // 校历维护 保存
  qryCoursePlain: `/zxx/calendar/qryCoursePlanList`, // 课程计划列表查询
  qryGrade: `/zxx/arrange/qrySegGradeInfo`, // 年级
  qrySegGrade: `/zxx/calendar/qrySegGradeRela`, // 级联年级

  /* 登录 */
  qryValidCode: `/zxx/visitor/picture/createValidateCode`, // 验证码
  userLogin: `/zxx/visitor/user/login`, // 登录
  logout: `/zxx/user/logout`, // 退出

  // 用户基础信息
  qryBaseInfo: `/qry/qryBaseInfo`,

  // 模板下载
  teachTaskExcelTemplate: `/static/template/teachTask.xls`, // 普通排课任课表_排课班级.xls
  coursePlainExcelTemplate: `/static/template/coursePlain.xls`, // 课程计划
  subjectLayerExcelTemplate: `/static/template/subjectLayer.xls`, // 走班排课-教学计划-学科分层及课时-走班学科课程分层定义
  chooseCourseExcelTemplate: `/static/template/chooseCourse.xls`, // 走班排课-教学计划-导入学生选课 分层教学学生选课结果
  joinedStudentExcelTemplate: `/static/template/joinedStudent.xls` // 选课平台-选课设置 - 参选学生tab
}
