// import './App.scss'
import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const routesAuth = [
  {
    path: 'registro',
    element: lazy(() => import('../pages/registro'))
  },
  {
    path: 'login',
    element: lazy(() => import('../pages/login'))
  },
  {
    path: 'registro-paciente',
    element: lazy(() => import('../pages/registro-paciente'))
  },
  {
    path: 'registro-medico',
    element: lazy(() => import('../pages/registro-medico'))
  },
  {
    path: '*',
    element: () => <Navigate to={'/login'} />
  }
]

const routes = [
  {
    path: '',
    element: lazy(() => import('../pages/inicio'))
  },
  {
    path: 'inicio-pac',
    element: lazy(() => import('../pages/inicio-paciente'))
  },
  {
    path: 'proximas-citas',
    element: lazy(() => import('../pages/proximas-citas'))
  },
  {
    path: 'horario-de-atencion',
    element: lazy(() => import('../pages/horario-de-atencion'))
  },
  {
    path: 'historial-de-citas',
    element: lazy(() => import('../pages/historial-de-citas'))
  },
  {
    path: 'preguntas-pacientes',
    element: lazy(() => import('../pages/preguntas-pacientes'))
  },
  {
    path: 'preguntas-publicas',
    element: lazy(() => import('../pages/preguntas-publicas'))
  },
  {
    path: 'calendario-de-citas',
    element: lazy(() => import('../pages/calendario-de-citas'))
  },
  {
    path: '*',
    element: () => <Navigate to={'/'} />
  }
]

const Element = ({ children: Children }) => {
  return <Suspense fallback="cargando..">{<Children />}</Suspense>
}

function Navigation() {
  const accessToken = useSelector((s) => s.sesion.accessToken)
  const dataRoutes = accessToken ? routes : routesAuth
  console.log('accessToken', accessToken)
  return (
    <BrowserRouter>
      <Routes>
        {dataRoutes.map((params, index) => {
          return (
            <Route
              key={index.toString()}
              {...params}
              element={<Element>{params.element}</Element>}
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation
