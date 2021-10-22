import React, { useState } from "react";
import { Formik } from "formik";

export const Formulario = () => {
	const [formularioEnviado, setFormularioEnviado] = useState(false);

	return (
		<div className="col-md-6 shadow offset-3 mt-4 p-3">
			<Formik
				initialValues={{
					nombre: "",
					correo: "",
				}}
				validate={(valores) => {
					let errores = {};

					/*=== Validacion Nombre ===*/
					if (!valores.nombre) {
						errores.nombre = "Por favor ingresa un nombre";
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
						errores.nombre =
							"El nombre solo puede contener letras y espacios";
					}

					if (!valores.correo) {
						errores.correo =
							"Por favor ingresa un correo electronico";
					} else if (
						!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
							valores.correo,
						)
					) {
						errores.correo =
							"El correo solo puede contener letras, numeros, puntos, guiones";
					}

					return errores;
				}}
				onSubmit={(valores, { resetForm }) => {
					resetForm();
					console.log("formulario enviado");
					setFormularioEnviado(true);
					setTimeout(() => {
						setFormularioEnviado(false);
					}, 3000);
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleSubmit,
					handleBlur,
				}) => (
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="nombre" className="form-label">
								Nombre
							</label>
							<input
								autoComplete="off"
								autoFocus
								className="form-control"
								type="text"
								name="nombre"
								id="nombre"
								placeholder="Miguel cayo"
								onChange={handleChange}
								value={values.nombre}
								onBlur={handleBlur}
							/>
							{touched.nombre && errors.nombre && (
								<small className="text-danger p-2 mt-1">
									{errors.nombre}
								</small>
							)}
						</div>
						<div className="mb-3">
							<label htmlFor="correo" className="form-label">
								Correo
							</label>
							<input
								autoComplete="off"
								className="form-control"
								type="text"
								name="correo"
								id="correo"
								placeholder="mickmiguel05@gmail.com"
								onChange={handleChange}
								value={values.correo}
								onBlur={handleBlur}
							/>
							{touched.correo && errors.correo && (
								<small className="text-danger p-2 mt-1">
									{errors.correo}
								</small>
							)}
						</div>
						<div className="d-grid">
							<button type="submit" className="btn btn-dark">
								Enviar...
							</button>
						</div>

						{formularioEnviado && (
							<p
								className="alert alert-success text-center mt-3"
								role="alert"
							>
								Formulario enviado con exito
							</p>
						)}
					</form>
				)}
			</Formik>
		</div>
	);
};
