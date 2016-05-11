using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using MySql.Data;

namespace WindowsFormsApplication1
{
    class DataBaseConnection
    {
        private MySqlConnection connection;

        public DataBaseConnection()
        {
            string connectionString = "server=athena01.fhict.local;" +
                         "database=dbi313795;" +
                         "user id=dbi313795;" +
                         "password=foletia;" +
                         "connect timeout=30;";

            connection = new MySqlConnection(connectionString);
        }
        public void OpenDatabase()
        {
            connection.Open();
        }


        public void CloseDatabase()
        {
            connection.Close();
        }
    }
}
