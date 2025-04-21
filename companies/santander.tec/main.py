documents: list[str] = [
    'Tarjeta - Para pedir una nueva tarjeta comunicarse al 0800-XXX-XXXX',
    'Tarjeta - Si su tarjeta fue extraviada debe denunciarla de inmediato al 0810-XXX-XXXX',
    'Tarjeta - Para consultar el saldo de su tarjeta de credito, dirijase a /tarjetas en online banking',
    'Tarjeta - Para activar una nueva tarjeta, ingrese a /tarjetas/activar en online banking',
    'Tarjeta - Para cambiar el límite de su tarjeta, comuníquese con su ejecutivo de cuenta',

    'Prestamos - Para solicitar un prestamo dirijase a la sucursal más cercana',
    'Prestamos - Para conocer las opciones disponibles diríjase a /prestamos en online banking',
    'Prestamos - Puede simular un préstamo personal en nuestro simulador en línea',
    'Prestamos - Para cancelar un préstamo vigente, comuníquese al 0800-XXX-PPPP',

    'Cuentas - Para abrir una nueva cuenta, visite nuestra sucursal más cercana',
    'Cuentas - Consulte los requisitos para abrir una cuenta en /cuentas en online banking',
    'Cuentas - Para reportar problemas con su cuenta, comuníquese al 0800-XXX-YYYY',
    'Cuentas - Para actualizar sus datos de cuenta, ingrese a /cuentas/actualizar',
    'Cuentas - Para cerrar una cuenta, debe solicitarlo presencialmente en la sucursal',

    'Seguros - Para contratar un seguro, visite /seguros en online banking',
    'Seguros - Si desea cancelar su seguro, comuníquese al 0810-XXX-ZZZZ',
    'Seguros - Para conocer las coberturas disponibles, diríjase a la sucursal más cercana',
    'Seguros - Para reportar un siniestro, llame a la línea directa de siniestros al 0800-XXX-SINI',
    'Seguros - Para modificar su póliza, acceda a su perfil en /seguros',

    'Inversiones - Consulte las opciones de inversión en /inversiones en online banking',
    'Inversiones - Para asesoramiento personalizado, comuníquese al 0800-INV-XXXX',
    'Inversiones - Revise el estado de sus inversiones en la sección de inversiones de nuestra app',
    'Inversiones - Para abrir un nuevo fondo de inversión, visite /inversiones/fondos',
    'Inversiones - Para retirar fondos de una inversión, solicítelo en su sucursal o mediante la app',
]


def get_user_input() -> str:
    user_input = input("Enter your query: ")

    return user_input.strip()


def rag_pipeline():
    user_query = get_user_input()
    print(f"User Query: {user_query}")

    if len(user_query) == 0:
        print("Empty query. Exiting...")
        exit()


if __name__ == "__main__":
    while True:
        rag_pipeline()
