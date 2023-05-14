package discord;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
import io.netty.channel.FixedRecvByteBufAllocator;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.timeout.IdleStateHandler;

public class DiscordServer
{
  private static final DiscordServer instance = new DiscordServer();
  
  private ServerBootstrap bootstrap;
  
  private DiscordClientStorage clients;
  
  public static DiscordServer getInstance()
  {
    return instance;
  }
  
  public final DiscordClientStorage getClientStorage()
  {
    if (this.clients == null)
    {
      this.clients = new DiscordClientStorage();
    }
    return this.clients;
  }
  
  public void run_startup_configurations()
  {
    NioEventLoopGroup nioEventLoopGroup1 = new NioEventLoopGroup();
    NioEventLoopGroup nioEventLoopGroup2 = new NioEventLoopGroup();
    try
    {
      this.bootstrap = new ServerBootstrap();
      this.bootstrap.group(nioEventLoopGroup1, nioEventLoopGroup2).channel(NioServerSocketChannel.class).childHandler(new ChannelInitializer<SocketChannel>()
      {
        public void initChannel(SocketChannel ch) throws Exception
        {
          ch.pipeline().addLast("decodeer", new DiscordNettyDecoder());
          ch.pipeline().addLast("encodeer", new DiscordNettyEncoder());
          ch.pipeline().addLast("idleStateHandler", new IdleStateHandler(30, 5, 0));
          ch.pipeline().addLast("handler", new DiscordNettyHandler());
          ch.config().setRecvByteBufAllocator(new FixedRecvByteBufAllocator(65535));
          ch.config().setOption(ChannelOption.SO_RCVBUF, Integer.valueOf(65535));
        }
      }).option(ChannelOption.SO_BACKLOG, Integer.valueOf(128)).option(ChannelOption.SO_RCVBUF, Integer.valueOf(65535)).option(ChannelOption.RCVBUF_ALLOCATOR, new FixedRecvByteBufAllocator(65535)).childOption(ChannelOption.SO_KEEPALIVE, Boolean.valueOf(true));
      ChannelFuture cf = this.bootstrap.bind(1000).sync();
      this.clients = new DiscordClientStorage();
      System.out.println("봇 서포트 서버 개방 성공");
    }
    catch (InterruptedException ex)
    {
      System.err.println("봇 서포트 서버 개방 실패\r\n" + ex);
    }
  }
}
