from tkinter import*
from time import sleep
import socket

root = Tk()

root.geometry("470x80+100+100")
root.title("Reverse Ip")
root.configure(background="white")

#recuperando variavel d produto
txtproduto = StringVar()
txtproduto.set("")

#funçoes para os botoes
#codigo do botao sair
def iExit():
    root.destroy()
    return

#codigo botao limpar
def limpar():
    txtproduto.set("")
            
#codigo para habilitar o enter
def enter():
    ip = str(txtproduto.get())
    if(ip != " "):
        txtproduto.set(socket.gethostbyaddr(ip)[2:16])

#Frame 
Total = Frame(root,width=300,height=150,bd=3,relief="raise")
Total.pack(side=TOP)

Total2 = Frame(root,width=300,height=150,bd=3,relief="raise")
Total2.pack(side=BOTTOM)

#inserindo label para o titulo do sistema
lblTitulo = Label(Total,font=('arial',12,'bold'),text="Digite o dominio: ",width=30,height=1)
lblTitulo.grid(row=0, column=0)

#CAIXA DE TEXTO
txtProduto = Entry(Total, font=('arial',12,'bold'),bd=2,width=15,justify='left',
                   state=NORMAL, textvariable=txtproduto)#NORMAL DISABLED
txtProduto.grid(row=0,column=1)

#botoes da area da venda
cmdTotal=Button(Total2,padx=16,pady=1,bd=2,fg='black',font=('arial',8,'bold'),width=5,text="Enter",command=enter)
cmdTotal.grid(row=0,column=1)

cmdLimpar=Button(Total2,padx=16,pady=1,bd=2,fg='black',font=('arial',8,'bold'),width=5,text="Limpar",command=limpar)
cmdLimpar.grid(row=0,column=3)

cmdSair=Button(Total2,padx=16,pady=1,bd=2,fg='black',font=('arial',8,'bold'),width=5,text="Sair",command=iExit)
cmdSair.grid(row=0,column=4)

root.mainloop()
sleep(2)
