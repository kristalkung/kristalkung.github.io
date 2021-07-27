import React from 'react'
import './web.css';

function Web() {
  return (
    <div className='web'>
      <div className='web-option'>
        <a href='#projects'>
          <img className='icon' src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQ5NC42NjIgNTUuNjAzLTM4LjI2NS0zOC4yNjRjLTIzLjExNC0yMy4xMTYtNjAuNTMyLTIzLjEyMS04My42NTMtLjAwMWwtMjYuMzY5IDI2LjM2OXMwIDAgMCAwYy0xNi4wMDggMTYuMDA5LTI1NC43MjIgMjU0LjcyMy0yNjQuMzk3IDI2NC4zOTgtNi44NzMgNi44NzMtMTIuMzEgMTQuODgyLTE2LjE2MSAyMy44MDNsLS4wNjIuMTQzYy0uMDAxLjAwMy0uMDAzLjAwNy0uMDA0LjAxLTYuNDgzIDE1LjAxOS01Ni4yNTcgMTMwLjMzMy02My44NTQgMTQ3LjkzNS0zLjc0NCA4LjY3NC0xLjg0NyAxOC41OTQgNC44MzMgMjUuMjc0IDYuNzAxIDYuNzAyIDE2LjYyNyA4LjU2NyAyNS4yNzUgNC44MzRsMTQ3LjkzNS02My44NTVjLjAwMi0uMDAxLjAwNC0uMDAyLjAwNi0uMDAzbC4xNDYtLjA2M2M4LjkyNC0zLjg1MyAxNi45MzItOS4yOSAyMy44MDQtMTYuMTYybDM3Ljg4Ni0zNy44ODdjMi45MjktMi45MjkgMi45MjktNy42NzcgMC0xMC42MDctMi45MjktMi45MjgtNy42NzgtMi45MjktMTAuNjA3LjAwMWwtMzcuODg2IDM3Ljg4NmMtNC4zMzkgNC4zMzktOS4yNSA3Ljk1NS0xNC42MzEgMTAuODE0bC0yMy40MTktMjMuNDE5IDIzMy4yNzEtMjMzLjI3IDI1LjMyNyAyNS4zMjctMTU4LjAyNCAxNTguMDIzYy0yLjkyOSAyLjkzLTIuOTI5IDcuNjc4IDAgMTAuNjA4IDIuOTI4IDIuOTI4IDcuNjc3IDIuOTI4IDEwLjYwNyAwbDIyOC4yNDEtMjI4LjI0YzIzLjExNS0yMy4xMTcgMjMuMTIxLTYwLjUzNC4wMDEtODMuNjU0em0tNDAyLjA3NyAyNjMuMTA5IDIyMC41NDktMjIwLjU0OSAyNS4zMjcgMjUuMzI3LTIzMy4yNzEgMjMzLjI3MS0yMy40MTktMjMuNDE5YzIuODU3LTUuMzggNi40NzQtMTAuMjkgMTAuODE0LTE0LjYzem0tNjYuNTI1IDE3Ny42MmMtNC41NzQgMS45NzctNy44MzItLjc3OC04LjcyMy0xLjY2OC0uODktLjg5MS0zLjY0Mi00LjE1LTEuNjY4LTguNzIzbDE2LjU2NS0zOC4zNzcgMzIuMjAzIDMyLjIwM3ptMTM3Ljk0My01OS41NDMtODQuNzQ4IDM2LjU4MS00MC42MjUtNDAuNjI0IDM2LjU4MS04NC43NDl6bS0xOS4zNzItNDAuNTg2LTI4LjgzNC0yOC44MzQgMjMzLjI3Mi0yMzMuMjcxIDI4LjgzNCAyOC44MzR6bTMzOS40MjMtMjY3LjU1NC0yMS4wNjUgMjEuMDY1LTU3LjU4NS01Ny41ODVjLTIuOTMtMi45MjgtNy42NzgtMi45MjgtMTAuNjA4IDAtMi45MjkgMi45My0yLjkyOSA3LjY3OCAwIDEwLjYwOGw1Ny41ODUgNTcuNTg1LTI3LjkzNyAyNy45MzctMzAuNjIxLTMwLjYyMWMtLjAwMy0uMDAzLS4wMDYtLjAwNy0uMDA5LS4wMXMtLjAwNy0uMDA2LS4wMS0uMDA5bC0zOS40MjItMzkuNDIyYy0uMDAzLS4wMDMtLjAwNi0uMDA3LS4wMDktLjAxcy0uMDA3LS4wMDYtLjAxLS4wMDlsLTMwLjYyMS0zMC42MjEgMjcuOTM3LTI3LjkzNyAxOC4xNTYgMTguMTU1YzEuNDY0IDEuNDY0IDMuMzg0IDIuMTk2IDUuMzAzIDIuMTk2czMuODM5LS43MzIgNS4zMDQtMi4xOTdjMi45MjktMi45MjkgMi45MjktNy42NzgtLjAwMS0xMC42MDdsLTE4LjE1NS0xOC4xNTQgMjEuMDY2LTIxLjA2NmMxNy4yNS0xNy4yNTIgNDUuMTgzLTE3LjI1NyA2Mi40MzcuMDAxbDM4LjI2NiAzOC4yNjVjMTcuMjUyIDE3LjI0NyAxNy4yNTggNDUuMTc5LS4wMDEgNjIuNDM2eiIvPjwvZz48L3N2Zz4=" alt=''/>
          Projects
        </a>
      </div>
      <div className='web-option'>
        <a href='#skills'>
          <img className='icon' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNTA0LjM5NiwzNzMuMDk1aC0yNi44MVYxMDEuMTcyYzAtMTYuOTU1LTEzLjc0NS0zMC43LTMwLjctMzAuN0g2Mi43MTRjLTE2Ljk1NSwwLTMwLjcsMTMuNzQ1LTMwLjcsMzAuN3YyNzEuOTIzSDcuNjA0DQoJCQljLTQuMTk5LDAtNy42MDQsMy40MDUtNy42MDQsNy42MDR2MTYuNzkzYzAsMjQuMzIsMTkuNzE2LDQ0LjAzNyw0NC4wMzcsNDQuMDM3SDMzMC41MmM0LjE5OSwwLDcuNjA0LTMuNDA1LDcuNjA0LTcuNjA0DQoJCQlzLTMuNDA1LTcuNjA0LTcuNjA0LTcuNjA0SDQ0LjAzN2MtMTUuOTIyLTAuMDAxLTI4LjgyOS0xMi45MDctMjguODI5LTI4LjgyOXYtOS4xODloMjQuNDExaDE1NC44MDMNCgkJCWMwLjI3LDE0LjcxOSwxMi4zMTksMjYuNjEzLDI3LjEwMywyNi42MTNoNjguOTVjMTQuNzgzLDAsMjYuODMzLTExLjg5NCwyNy4xMDMtMjYuNjEzaDE1Mi40MDZoMjYuODF2OS4xODkNCgkJCWMwLDE1LjkyMi0xMi45MDcsMjguODI5LTI4LjgyOSwyOC44MjlIMzY2LjAwN2MtNC4xOTksMC03LjYwNCwzLjQwNS03LjYwNCw3LjYwNHMzLjQwNSw3LjYwNCw3LjYwNCw3LjYwNGgxMDEuOTU3DQoJCQljMjQuMzIsMCw0NC4wMzctMTkuNzE2LDQ0LjAzNy00NC4wMzd2LTE2Ljc5M0M1MTIsMzc2LjQ5OSw1MDguNTk1LDM3My4wOTUsNTA0LjM5NiwzNzMuMDk1eiBNMjkwLjQ3NCwzOTkuNzA3aC02OC45NQ0KCQkJYy02LjM5NywwLTExLjYzMy01LjA3MS0xMS44OTYtMTEuNDA1aDkyLjc0MkMzMDIuMTA3LDM5NC42MzUsMjk2Ljg3MiwzOTkuNzA3LDI5MC40NzQsMzk5LjcwN3ogTTQ2Mi4zNzgsMzczLjA5NUg0Ny4yMjNWMTAxLjE3Mg0KCQkJYzAtOC41NDMsNi45NDktMTUuNDkyLDE1LjQ5Mi0xNS40OTJoMzg0LjE3MWM4LjU0MywwLDE1LjQ5Miw2Ljk0OSwxNS40OTIsMTUuNDkyVjM3My4wOTV6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00NDEuNTk0LDk4Ljg2MUgxNDcuMDE1Yy00LjE5OSwwLTcuNjA0LDMuNDA1LTcuNjA0LDcuNjA0YzAsNC4xOTksMy40MDUsNy42MDQsNy42MDQsNy42MDRINDMzLjk5djIzMC42MzhINzUuNjExDQoJCQlWMTE0LjA2OGgzNS45MTdjNC4xOTksMCw3LjYwNC0zLjQwNSw3LjYwNC03LjYwNGMwLTQuMTk5LTMuNDA1LTcuNjA0LTcuNjA0LTcuNjA0SDY4LjAwN2MtNC4xOTksMC03LjYwNCwzLjQwNS03LjYwNCw3LjYwNA0KCQkJdjI0NS44NDZjMCw0LjE5OSwzLjQwNSw3LjYwNCw3LjYwNCw3LjYwNGgzNzMuNTg3YzQuMTk5LDAsNy42MDQtMy40MDUsNy42MDQtNy42MDRWMTA2LjQ2NQ0KCQkJQzQ0OS4xOTgsMTAyLjI2NSw0NDUuNzk0LDk4Ljg2MSw0NDEuNTk0LDk4Ljg2MXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" alt=''/>
          Skills
        </a>
      </div>
      <div className='web-option'>
        <a href='#experience'>
          <img className='icon' src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PHBhdGggZD0ibTMyNy45ODMgNTAuODU0aC0xNTUuNzk0Yy00LjE0MyAwLTcuNSAzLjM1Ny03LjUgNy41czMuMzU3IDcuNSA3LjUgNy41aDE1NS43OTRjNC4xNDMgMCA3LjUtMy4zNTcgNy41LTcuNXMtMy4zNTctNy41LTcuNS03LjV6Ii8+PHBhdGggZD0ibTMyNy45ODMgOTQuNzU2aC0xNTUuNzk0Yy00LjE0MyAwLTcuNSAzLjM1Ny03LjUgNy41czMuMzU3IDcuNSA3LjUgNy41aDE1NS43OTRjNC4xNDMgMCA3LjUtMy4zNTcgNy41LTcuNXMtMy4zNTctNy41LTcuNS03LjV6Ii8+PHBhdGggZD0ibTQ3MS41MjUgMjU5LjM4MWgtNDQuNTI1di0yMC45MzhjMC0yNy41OTYtMjIuNDUxLTUwLjA0Ni01MC4wNDctNTAuMDQ2aC04NC4zMmMtMjcuNTk2IDAtNTAuMDQ3IDIyLjQ1LTUwLjA0NyA1MC4wNDZ2MjAuOTM4aC00NC41MjVjLTIyLjM5NCAwLTQwLjQ3NSAxOC4xNTctNDAuNDc1IDQwLjQ3NXYxNzEuNTIzYzAgMjIuMzE3IDE4LjE1NyA0MC40NzUgNDAuNDc1IDQwLjQ3NWgyNzMuNDY1YzIyLjMxNyAwIDQwLjQ3NS0xOC4xNTcgNDAuNDc1LTQwLjQ3NXYtMzIuNWMwLTQuMTQzLTMuMzU3LTcuNS03LjUtNy41cy03LjUgMy4zNTctNy41IDcuNXYzMi41YzAgMTQuMDQ3LTExLjQyOCAyNS40NzUtMjUuNDc1IDI1LjQ3NWgtMjczLjQ2NWMtMTQuMDQ3IDAtMjUuNDc1LTExLjQyOC0yNS40NzUtMjUuNDc1di0xMDYuMjk4YzExLjgxOSAxNC41NzMgMjkuNTk5IDI0LjEyNSA0OS41OTMgMjQuOTA2djExLjQ1MWMwIDE1LjExMyAxMi4yOTYgMjcuNDA5IDI3LjQwOSAyNy40MDlzMjcuNDA5LTEyLjI5NiAyNy40MDktMjcuNDA5di0xMS4zOTloMTE1LjU5MnYxMS4zOTljMCAxNS4xMTMgMTIuMjk2IDI3LjQwOSAyNy40MDkgMjcuNDA5czI3LjQwOS0xMi4yOTYgMjcuNDA5LTI3LjQwOXYtMTEuNDUxYzE5Ljk5NC0uNzgxIDM3Ljc3NC0xMC4zMzMgNDkuNTkzLTI0LjkwNnYzOC43MzVjMCA0LjE0MyAzLjM1NyA3LjUgNy41IDcuNXM3LjUtMy4zNTcgNy41LTcuNXYtMTAzLjk2MmMwLTIyLjMxLTE4LjA3My00MC40NzMtNDAuNDc1LTQwLjQ3M3ptLTIxMy45MzktMjAuOTM4YzAtMTkuMzI0IDE1LjcyMi0zNS4wNDYgMzUuMDQ3LTM1LjA0Nmg4NC4zMmMxOS4zMjUgMCAzNS4wNDcgMTUuNzIyIDM1LjA0NyAzNS4wNDZ2MjAuOTM4aC0xNS42MTl2LTIwLjkzOGMwLTEwLjcxMS04LjcxNS0xOS40MjYtMTkuNDI4LTE5LjQyNmgtODQuMzJjLTEwLjcxMiAwLTE5LjQyNyA4LjcxNS0xOS40MjcgMTkuNDI2djIwLjkzOGgtMTUuNjJ6bTMwLjYyIDIwLjkzOHYtMjAuOTM4YzAtMi40NCAxLjk4NS00LjQyNiA0LjQyNy00LjQyNmg4NC4zMmMyLjQ0MSAwIDQuNDI4IDEuOTg1IDQuNDI4IDQuNDI2djIwLjkzOHptLTI2LjIwOSAxNDIuMDU3YzAgNi44NDMtNS41NjYgMTIuNDA5LTEyLjQwOSAxMi40MDlzLTEyLjQwOS01LjU2Ni0xMi40MDktMTIuNDA5di0yNi44MTFjMC02Ljg0MyA1LjU2Ni0xMi40MDkgMTIuNDA5LTEyLjQwOXMxMi40MDkgNS41NjYgMTIuNDA5IDEyLjQwOXptMTcwLjQxIDBjMCA2Ljg0My01LjU2NiAxMi40MDktMTIuNDA5IDEyLjQwOXMtMTIuNDA5LTUuNTY2LTEyLjQwOS0xMi40MDl2LTE4LjgyMmMwLS4wMjYuMDAxLS4wNTIuMDAxLS4wNzdzLS4wMDEtLjA1Mi0uMDAxLS4wNzd2LTcuODM0YzAtNi44NDMgNS41NjYtMTIuNDA5IDEyLjQwOS0xMi40MDlzMTIuNDA5IDUuNTY2IDEyLjQwOSAxMi40MDl6bTE1LTI2LjQ2NnYtLjM0NGMwLTE1LjExMy0xMi4yOTYtMjcuNDA5LTI3LjQwOS0yNy40MDlzLTI3LjQwOSAxMi4yOTYtMjcuNDA5IDI3LjQwOXYuNDExaC0xMTUuNTkydi0uNDExYzAtMTUuMTEzLTEyLjI5Ni0yNy40MDktMjcuNDA5LTI3LjQwOXMtMjcuNDA5IDEyLjI5Ni0yNy40MDkgMjcuNDA5di4zNDRjLTI3LjU4MS0xLjM4OS00OS41OTMtMjQuMjY0LTQ5LjU5My01Mi4xODR2LTIyLjkzNGMwLTE0LjA2NyAxMS40MDEtMjUuNDc0IDI1LjQ3NS0yNS40NzRoMjczLjQ2NWMxNC4wMzggMCAyNS40NzUgMTEuMzcxIDI1LjQ3NSAyNS40NzV2MjIuOTMzYy0uMDAxIDI3LjkyLTIyLjAxMyA1MC43OTUtNDkuNTk0IDUyLjE4NHoiLz48cGF0aCBkPSJtMTQ3LjkxNyA0OTYuODU0aC0xMTAuODI4Yy0xMi4xOCAwLTIyLjA4OS05LjkwOS0yMi4wODktMjIuMDg5di0zNjAuMjUzYzAtMS42MTkuMTczLTMuMjExLjUxMS00Ljc1Nmg2OC4yNTVjMTQuMjUxIDAgMjUuODQ1LTExLjU5NCAyNS44NDUtMjUuODQ0di02OC4yNTVjMS41NDUtLjMzNyAzLjEzNy0uNTExIDQuNzU2LS41MTFoMjU0LjI4OGMxMi4xOCAwIDIyLjA4OSA5LjkwOSAyMi4wODkgMjIuMDg5djEyOC42ODJjMCA0LjE0MyAzLjM1NyA3LjUgNy41IDcuNXM3LjUtMy4zNTcgNy41LTcuNXYtMTI4LjY4MmMwLTIwLjQ1MS0xNi42MzgtMzcuMDg5LTM3LjA4OS0zNy4wODloLTI1NC4yODljLTkuOTA3IDAtMTkuMjIyIDMuODU3LTI2LjIyNyAxMC44NjJsLTc3LjI3NyA3Ny4yNzhjLTcuMDA1IDcuMDA1LTEwLjg2MiAxNi4zMTktMTAuODYyIDI2LjIyNnYzNjAuMjUzYzAgMjAuNDUxIDE2LjYzOCAzNy4wODkgMzcuMDg5IDM3LjA4OWgxMTAuODI4YzQuMTQzIDAgNy41LTMuMzU3IDcuNS03LjVzLTMuMzU3LTcuNS03LjUtNy41em0tNTMuMzA3LTQ3MS4xMDF2NTguMTU5YzAgNS45NzktNC44NjUgMTAuODQ0LTEwLjg0NSAxMC44NDRoLTU4LjE1OHoiLz48L2c+PC9nPjwvc3ZnPg==" alt=''/>
          Experience
        </a>
      </div>
      <div className='web-option'>
        <a href='#contact'>
          <img className='icon' src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQ4NS4wMjcgMzQ2LjQ1MWMxNy42NDYtMjUuMjQ0IDI2Ljk3My01NC45MjIgMjYuOTczLTg1LjgyNSAwLTgyLjcxLTY3LjI5LTE1MC0xNTAtMTUwLTI3Ljg3MSAwLTU0Ljc0OSA3LjYxOS03OC4yODggMjIuMDY3LTI0LjgyNC00OC42NjMtNzUuNDM5LTgyLjA2Ni0xMzMuNzEyLTgyLjA2Ni04Mi43MSAwLTE1MCA2Ny4yOS0xNTAgMTUwIDAgMjMuMTYgNS4xNDEgNDUuMzcyIDE1LjI4IDY2LjAxOWwxMy40NjUtNi42MTJjLTkuMTIxLTE4LjU3Mi0xMy43NDUtMzguNTU5LTEzLjc0NS01OS40MDcgMC03NC40MzkgNjAuNTYxLTEzNSAxMzUtMTM1czEzNSA2MC41NjEgMTM1IDEzNS02MC41NjEgMTM1LTEzNSAxMzVoLTIuMDc3bC02NS40MjMgMzkuMjU0di01Ny4yNWwtMy41NDctMi4yYy0xNy40MDEtMTAuNzkzLTMyLjM2OC0yNS42Ni00My4yODItNDIuOTkzbC0xMi42OTMgNy45OTJjMTEuMzczIDE4LjA2MiAyNi43MDggMzMuNzEyIDQ0LjUyMiA0NS40Nzd2NzUuNDY2bDg0LjYwMi01MC43NjJjMjcuODY2LS4zODUgNTMuOTE3LTguNDEyIDc2LjE1Ny0yMi4wNjggMjUuMTU3IDQ5LjUxMyA3NS43NjQgODEuMjg4IDEzMS42NCA4Mi4wNjdsODQuNjAyIDUwLjc2MXYtNzUuNDY1YzExLjQ0NC03LjU1IDIxLjc5OC0xNi42MjQgMzAuODE4LTI3LjAxN2wtMTEuMzI4LTkuODMyYy04Ljk1NSAxMC4zMTctMTkuMzY1IDE5LjE4OS0zMC45NDMgMjYuMzcxbC0zLjU0NyAyLjJ2NTcuMjVsLTY1LjQyMy0zOS4yNTNoLTIuMDc4Yy01MS42OTkgMC05OC42NTMtMjkuNS0xMjEuMjU3LTc1LjYzNSAzNS45ODgtMjcuNDI0IDU5LjI1Ny03MC43MjcgNTkuMjU3LTExOS4zNjMgMC0xOS4wNzUtMy41ODYtMzcuMzI3LTEwLjEwOC01NC4xMjYgMjEuNTY5LTEzLjY2OSA0Ni4zNjgtMjAuODc1IDcyLjEwOC0yMC44NzUgNzQuNDM5IDAgMTM1IDYwLjU2MSAxMzUgMTM1IDAgMjcuODEzLTguMzkyIDU0LjUxOS0yNC4yNjggNzcuMjMxeiIvPjxwYXRoIGQ9Im02My43MzcgMjM0LjA2IDEuMDA0IDIuOTYzYzEyLjM4MyAzNi41NDggNDYuNjQ2IDYxLjEwNCA4NS4yNTkgNjEuMTA0czcyLjg3Ni0yNC41NTYgODUuMjU5LTYxLjEwNGwxLjAwNC0yLjk2My0xMC45NzMtMjEuOTQzaC0xNTAuNTh6bTIwLjI0Mi02Ljk0NGgxMzIuMDQxbDMuOTg4IDcuOTc4Yy0xMS4xMDIgMjguODU1LTM4Ljg1NiA0OC4wMzMtNzAuMDA5IDQ4LjAzM3MtNTguOTA3LTE5LjE3OC03MC4wMDktNDguMDMzeiIvPjxwYXRoIGQ9Im05Ny41MDEgMTQ0LjYxN2MtMjAuNjc4IDAtMzcuNSAxNi44MjItMzcuNSAzNy41aDE1YzAtMTIuNDA3IDEwLjA5NC0yMi41IDIyLjUtMjIuNXMyMi40OTkgMTAuMDkzIDIyLjQ5OSAyMi41aDE1YzAtMjAuNjc4LTE2LjgyMi0zNy41LTM3LjQ5OS0zNy41eiIvPjxwYXRoIGQ9Im0xODAgMTgyLjExN2MwLTEyLjQwNyAxMC4wOTQtMjIuNSAyMi41LTIyLjVzMjIuNSAxMC4wOTMgMjIuNSAyMi41aDE1YzAtMjAuNjc4LTE2LjgyMi0zNy41LTM3LjUtMzcuNXMtMzcuNSAxNi44MjItMzcuNSAzNy41eiIvPjxwYXRoIGQ9Im0zMTUuNDMzIDI2MC42MjZjMCAxMi40MDYgMTAuMDk0IDIyLjUgMjIuNSAyMi41czIyLjUtMTAuMDkzIDIyLjUtMjIuNS0xMC4wOTQtMjIuNS0yMi41LTIyLjUtMjIuNSAxMC4wOTMtMjIuNSAyMi41em0zMCAwYzAgNC4xMzUtMy4zNjQgNy41LTcuNSA3LjVzLTcuNS0zLjM2NC03LjUtNy41IDMuMzY0LTcuNSA3LjUtNy41IDcuNSAzLjM2NSA3LjUgNy41eiIvPjxwYXRoIGQ9Im0zNzUuNDMyIDI2MC42MjZjMCAxMi40MDYgMTAuMDk0IDIyLjUgMjIuNSAyMi41czIyLjUtMTAuMDkzIDIyLjUtMjIuNS0xMC4wOTQtMjIuNS0yMi41LTIyLjUtMjIuNSAxMC4wOTMtMjIuNSAyMi41em0zMCAwYzAgNC4xMzUtMy4zNjQgNy41LTcuNSA3LjVzLTcuNS0zLjM2NC03LjUtNy41IDMuMzY0LTcuNSA3LjUtNy41IDcuNSAzLjM2NSA3LjUgNy41eiIvPjxwYXRoIGQ9Im00MjkuNSAxNzAuNjI2aDE1djE1aC0xNXoiLz48cGF0aCBkPSJtMzk5LjQ5OSAxNTUuNjI2aDE1djE1aC0xNXoiLz48cGF0aCBkPSJtMjAyLjUgMTAzLjEyNmgxNXYxNWgtMTV6Ii8+PHBhdGggZD0ibTE3Mi41IDg4LjEyN2gxNXYxNWgtMTV6Ii8+PC9nPjwvc3ZnPg==" alt=''/>
          Contact 
        </a>
      </div>
        
    </div>
  )
}

export default Web
