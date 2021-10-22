import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const FormMetodosDos = () => {
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
				{({ errors }) => (
					<Form>
						<div className="mb-3">
							<label htmlFor="nombre" className="form-label">
								Nombre
							</label>
							<Field
								autoComplete="off"
								autoFocus
								className="form-control"
								type="text"
								name="nombre"
								id="nombre"
								placeholder="Miguel cayo"
							/>
							<ErrorMessage
								name="nombre"
								component={() => (
									<small className="text-danger p-2 mt-1">
										{errors.nombre}
									</small>
								)}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="correo" className="form-label">
								Correo
							</label>
							<Field
								autoComplete="off"
								className="form-control"
								type="text"
								name="correo"
								id="correo"
								placeholder="mickmiguel05@gmail.com"
							/>
							<ErrorMessage
								name="correo"
								component={() => (
									<small className="text-danger p-2 mt-1">
										{errors.correo}
									</small>
								)}
							/>
						</div>

						<div className="mb-3">
							<Field
								name="pais"
								as="select"
								className="form-select form-select mb-3"
								aria-label=".form-select-lg example"
							>
								<option value="mexico">mexico</option>
								<option value="peru">peru</option>
								<option value="bolivia">Bolivia</option>
							</Field>
						</div>

						<div className="mb-3">
							<div className="form-check">
								<Field
									className="form-check-input"
									type="radio"
									name="flexRadioDefault"
									id="flexRadioDefault1"
								/>
								<label
									className="form-check-label"
									htmlFor="flexRadioDefault1"
								>
									Default radio
								</label>
							</div>
							<div className="form-check">
								<Field
									className="form-check-input"
									type="radio"
									name="flexRadioDefault"
									id="flexRadioDefault2"
									checked
								/>
								<label
									className="form-check-label"
									htmlFor="flexRadioDefault2"
								>
									Default checked radio
								</label>
							</div>
						</div>

						<div className="mb-3">
							<Field
								name="mensaje"
								as="textArea"
								placeholder="Leave a comment here"
								className="form-control"
							/>
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
					</Form>
				)}
			</Formik>
		</div>
	);
};
