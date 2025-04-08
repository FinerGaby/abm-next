"use client";
import { useState } from "react";
import { useFetch, useForm } from "@/app/common/hook";
import { Button, Input, List } from "@/app/common/components";

interface Auto {
  id: number;
  nombre: string;
  modelo: string;
}

export const Dashboard = () => {
  const API_URL = "/api/catalogo_autos";
  const [edit, setEdit] = useState<number | null>(null);

  const {
    data: autos,
    addItem,
    deleteItem,
    updateItem,
  } = useFetch<Auto>(API_URL);
  const { values, handleChange, resetForm, setValues, isValid } = useForm({
    nombre: "",
    modelo: "",
  });

  const handleSubmit = () => {
    if (!isValid()) {
      alert("Todos los campos son obligatorios");
      return;
    }
    if (edit !== null) {
      updateItem(edit, values);
      setEdit(null);
    } else {
      addItem(values);
    }

    resetForm();
  };

  const handleEdit = (auto: Auto) => {
    setValues({ nombre: auto.nombre, modelo: auto.modelo });
    setEdit(auto.id);
  };

  return (
    <div>
      <h2>Catálogo de Autos</h2>
      <Input
        name="nombre"
        label="Nombre"
        placeholder="Ingresá el nombre"
        value={values.nombre}
        onChange={handleChange}
      />
      <Input
        name="modelo"
        label="Modelo"
        placeholder="Ingresá el modelo"
        value={values.modelo}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>
        {edit !== null ? "Guardar Cambios" : "Agregar"}
      </Button>
      <List
        items={autos}
        displayKeys={["nombre", "modelo"]}
        onDelete={(auto) => {
          deleteItem(auto.id);
          if (edit === auto.id) {
            setEdit(null);
            resetForm();
          }
        }}
        onEdit={(auto) => handleEdit(auto)}
      />
    </div>
  );
};
