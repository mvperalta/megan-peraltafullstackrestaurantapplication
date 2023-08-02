module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cj3uk3liuie55pntu7qg-a'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'nextapp_okyp'),
      user: env('DATABASE_USERNAME', 'myapp'),
      password: env('DATABASE_PASSWORD', 'Lg2B2Si8OrliMR1CxvosjyiT6kmPhgRoE'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
